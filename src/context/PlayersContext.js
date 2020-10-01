import React, { useState, createContext } from 'react'

export const PlayersContext = createContext()

export const PlayersContextProvider = (props) => {
    const [ players, setPlayers ] = useState([])
    const [ selectedPlayer, setSelectedPlayer ] = useState(null)

    const addPlayer = (players) => {
        setPlayers([...players, players])
    }

    return (
        <PlayersContext.Provider 
                value={{ setPlayers, addPlayer, players, selectedPlayer, setSelectedPlayer }}>
            {props.children}
        </PlayersContext.Provider>
    )
}