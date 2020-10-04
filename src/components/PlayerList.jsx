import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PlayerRater from '../apis/PlayerRater'
import StarRating from '../components/StarRating'
import { PlayersContext } from '../context/PlayersContext'


const PlayerList = (props) => {
    const { players, setPlayers } = useContext(PlayersContext)
    let history = useHistory()

    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await PlayerRater.get("/")
               setPlayers(response.data.data.players)
               console.log(response)
            } catch (err) {console.log(err)}
        } 
            fetchData()
    }, [])

    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await PlayerRater.delete(`/${id}`)
            setPlayers(players.filter(player => {
                return player.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
    }

    const handlePlayerSelect = (id) => {
        history.push(`/players/${id}`)
    }

    const handleUpdate = async (e, id) => {
        e.stopPropagation()
        history.push(`/players/${id}/update`)
    }

    const renderRating = (player) => {
        if (!player.count) {
            return <span className="text-primary">0 reviews</span>;
          }
        return (
            <>
            <StarRating rating={player.id} />
                <span className="ml-1">({player.count})</span>
            </>
        )
    }
        
    return (
        <div className="table-responsive">
        <table className="table table-hover table-borderless table-striped">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Player</th>
                <th scope="col">Team</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
                <th scope="col">Goals</th>
                <th scope="col">Assists</th>
                <th scope="col">Points</th>
                <th scope="col">Shots</th>
                <th scope="col">Time on Ice</th>
                {/* <th scope="col">Edit</th> */}
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {players && players.map((player) => {
                    return (
                    <tr key={player.id} onClick={() => handlePlayerSelect(player.id)}>
                        <td>{player.name}</td>
                    {/* <td><span><img src={matchPlayerImage(player.name)} className="rounded float-right" style={{maxWidth: '1rem'}} alt="."></img></span>{player.name}</td> */}
                        <td>{player.team}</td>
                        <td>{"$".repeat(player.price_range)}</td>
                        <td>{renderRating(player)}</td>
                        <td>{player.goals}</td>
                        <td>{player.assists}</td>
                        <td>{player.points}</td>
                        <td>{player.shots}</td>
                        <td>{player.toi}</td>
                        {/* <td><button  onClick={(e) => handleUpdate(e, player.id)} type="button" className="btn btn-secondary btn-sm">Update</button></td> */}
                        <td><button disabled onClick={(e) => handleDelete(e, player.id)} type="button" className="btn btn-link btn-sm">Delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default PlayerList