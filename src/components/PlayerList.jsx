import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PlayerRater from '../apis/PlayerRater'
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
        
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Player</th>
                <th scope="col">Team</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
                <th scope="col">Country</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {players && players.map((player) => {
                    return (
                    <tr key={player.id} onClick={() => handlePlayerSelect(player.id)}>
                        <td>{player.name}</td>
                        <td>{player.team}</td>
                        <td>{"$".repeat(player.price_range)}</td>
                        <td>Reviews</td>
                        <td>{player.country}</td>
                        <td><button  onClick={(e) => handleUpdate(e, player.id)} type="button" className="btn btn-secondary btn-sm">Update</button></td>
                        <td><button onClick={(e) => handleDelete(e, player.id)} type="button" className="btn btn-link btn-sm">Delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default PlayerList