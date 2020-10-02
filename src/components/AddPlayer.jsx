import React, { useState, useContext } from 'react'
import PlayerRater from '../apis/PlayerRater'
import { PlayersContext } from '../context/PlayersContext'

const AddPlayer = () => {
    const { addPlayer } = useContext(PlayersContext)

    const [name, setName] = useState("")
    const [team, setTeam] = useState("")
    const [priceRange, setPriceRange] = useState(1)
    const [goals, setGoals] = useState(0)
    const [assists, setAssists] = useState(0)
    const [points, setPoints] = useState(0)
    const [shots, setShots] = useState(0)
    const [toi, setToi] = useState(0)


    const handleSubmit = async (e) => {
        try {
           const response = await PlayerRater.post("/", {
                name,
                team,
                price_range: priceRange,
                goals,
                assists,
                points,
                shots,
                toi
            })
            addPlayer(response.data.data.players)
            console.log(response.data.data)
        } catch (err) {console.log(err)}
    }

    return (
        <div className="mt-2 mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name || ""} onChange={(e) => setName(e.target.value)} className="form-control form-control-sm" type="text" placeholder="player"></input>
                    </div>
                    <div className="col">
                        <input value={team || ""} onChange={(e) => setTeam(e.target.value)} className="form-control form-control-sm" type="text" placeholder="team"></input>
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} 
                        className="form-control form-control-sm">
                            <option disabled>Cost</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="col">
                        <input value={goals || ""} onChange={(e) => setGoals(e.target.value)} className="form-control form-control-sm" type="text" placeholder="goals"></input>
                    </div>
                    <div className="col">
                        <input value={assists || ""} onChange={(e) => setAssists(e.target.value)} className="form-control form-control-sm" type="text" placeholder="assists"></input>
                    </div>
                    <div className="col">
                        <input value={points || ""} onChange={(e) => setPoints(e.target.value)} className="form-control form-control-sm" type="text" placeholder="points"></input>
                    </div>
                    <div className="col">
                        <input value={shots || ""} onChange={(e) => setShots(e.target.value)} className="form-control form-control-sm" type="text" placeholder="shots"></input>
                    </div>
                    <div className="col">
                        <input value={toi || ""} onChange={(e) => setToi(e.target.value)} className="form-control form-control-sm" type="text" placeholder="time on ice"></input>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-sm btn-style">Add Player</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlayer