import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PlayerRater from '../apis/PlayerRater'
import { PlayersContext } from '../context/PlayersContext'


const UpdatePlayer = (props) => {
    const { id } = useParams()
    let history = useHistory()
    const { players } = useContext(PlayersContext)

    const [name, setName] = useState("")
    const [team, setTeam] = useState("")
    const [priceRange, setPriceRange] = useState(1)
    const [country, setCountry] = useState("USA")

    useEffect(() => {
        const fetchData = async() => {
            const response = await PlayerRater.get(`/${id}`)
            setName(response.data.data.player.name)
            setTeam(response.data.data.player.team)
            setPriceRange(response.data.data.player.price_range)
            setCountry(response.data.data.player.country)
            console.log(response)
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedPlayer = await PlayerRater.put(`/${id}`, {
            name,
            team,
            price_range: priceRange,
            country
        })
        history.push("/")
    }

    return (
        <form action="">
            <div className="form-group mt-4">
                <label htmlFor="name">Name</label>
                <input value={name || ""} onChange={(e) => setName(e.target.value)} id="name" className="form-control form-control-sm" type="text" placeholder="name"></input>
            </div>
    
            <div className="form-group">
                <label htmlFor="team">Team</label>
                <input value={team || ""} onChange={(e) => setTeam(e.target.value)} id="team" className="form-control form-control-sm" type="text" placeholder="team"></input>
            </div>

            <div className="form-group">
                <label htmlFor="price_range">Price</label>
                <input value={priceRange} onChange={(e) => setPriceRange(e.target.value)} id="price_range" className="form-control form-control-sm" type="number" placeholder="price"></input>
            </div>

            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input value={country || ""} onChange={(e) => setCountry(e.target.value)} id="country" className="form-control form-control-sm" type="text" placeholder="country"></input>
            </div>

            <button disabled onClick={handleSubmit} type="submit" className="btn btn-primary btn-sm">Submit</button>
        </form>
    );
  }

  export default UpdatePlayer