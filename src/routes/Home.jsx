import React from 'react'
import AddPlayer from '../components/AddPlayer'
import Header from '../components/Header'
import PlayerList from '../components/PlayerList'

export default function Home() {
    return (
      <div className="home">
        <Header />
        <PlayerList />
        <AddPlayer />
      </div>
    );
  }
  