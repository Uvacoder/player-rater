import React from 'react'

export default function Header() {
    return (
        <div className="jumbotron mt-2">
        <h1 className="display-4">Rotorink Player Rater</h1>
        <p className="lead">The hockey player rater is a dfs tool providing the best stats for fantasy hockey fans. Ratings are developed by you, the best fantasy hockey fans, so this awesome community can create better lineups.</p>
        <p className="lead">Click on player row to start a conversation about and grade your favorite plays and see what other fantasy hockey players and experts are saying as well!</p>
        <p className="lead"><span role="img" aria-label="goal emoji representing admin protected">🥅 </span> <i>Player Add is for Admin Only</i>  <span role="img" aria-label="goal emoji representing admin protected">🥅 </span></p>
        <hr className="my-4"></hr>
        <p>Rotorink is a growing community of hockey fans. Follow us on twitter @rotorink</p>
        <a className="btn btn-dark btn-lg mr-2" href="https://rotorink.com" role="button">Read Articles</a>
        <a className="btn btn-primary btn-lg" href="https://twitter.com/rotorink" role="button">Twitter</a>
        </div>
    );
  }