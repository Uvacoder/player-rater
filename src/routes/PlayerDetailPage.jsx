import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Link
} from "react-router-dom";
import PlayerRater from '../apis/PlayerRater';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import { PlayersContext } from '../context/PlayersContext';

export default function PlayerDetailPage() {
  const { id } = useParams()
  const { selectedPlayer, setSelectedPlayer } = useContext(PlayersContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlayerRater.get(`/${id}`)

        setSelectedPlayer(response.data.data)
      } catch (err) {console.log(err)}
    }
    fetchData()
  }, [])

    return (
      <div className="update-page mt-4">
        <div className="card">
          <h3 className="card-header">{selectedPlayer && selectedPlayer.player.name}</h3>
          <div className="card-body">
            <h5 className="card-title">Player Overview</h5>
            <p className="card-text">Comment anything relative to this player or his team below.</p>
            <Link to="/" className="btn btn-primary">All Players</Link>
          </div>
        </div>
        <div>
          {selectedPlayer && (
            <>
            <div className="mt-3">
            <AddReview />
            <Reviews reviews={selectedPlayer.reviews} />
            </div>
            </>
          )}
        </div>
      </div>
    );
  }
  