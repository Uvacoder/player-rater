import axios from 'axios'

export default axios.create({
    baseURL: "https://rotorink-player-rater-server.herokuapp.com/api/v1/players",
})