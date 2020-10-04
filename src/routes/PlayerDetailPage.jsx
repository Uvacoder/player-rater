import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Link
} from "react-router-dom";
import PlayerRater from '../apis/PlayerRater';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { PlayersContext } from '../context/PlayersContext';
import matchPlayerImage from '../playerImageMethod'

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
          {selectedPlayer && (
            <>
            <h5 className="card-header">Player Overview</h5>
          <div className="card-body">
            <div className="d-flex align-items-center">
            <img src={matchPlayerImage(selectedPlayer.player.name) } style={{maxWidth: '12rem'}} className="rounded float-right" alt="player profile image"></img>
            <h3 className="card-title">{selectedPlayer && selectedPlayer.player.name}
              <span className="ml-4" style={{ fontSize: "1.4rem" }}><br></br>
                <StarRating rating={ selectedPlayer.player.average_rating } />
              </span>
            </h3>
            </div>
            <p className="card-text mt-4 ml-2">Comment anything relative to fantasy hockey as it pertains to this player or his team below.</p>
            <Link to="/" className="btn btn-primary ml-2">All Players</Link>
          </div>
          </>
          )}
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
  