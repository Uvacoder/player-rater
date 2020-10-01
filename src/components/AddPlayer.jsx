import React, { useState, useContext } from 'react'
import PlayerRater from '../apis/PlayerRater'
import { PlayersContext } from '../context/PlayersContext'

const AddPlayer = () => {
    const { addPlayer } = useContext(PlayersContext)

    const [name, setName] = useState("")
    const [team, setTeam] = useState("")
    const [priceRange, setPriceRange] = useState(1)
    const [country, setCountry] = useState("USA")


    const handleSubmit = async (e) => {
        try {
           const response = await PlayerRater.post("/", {
                name,
                team,
                price_range: priceRange,
                country
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
                        <input value={country || ""} onChange={(e) => setCountry(e.target.value)} className="form-control form-control-sm" type="text" placeholder="country"></input>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-sm btn-style">Add Player</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlayer