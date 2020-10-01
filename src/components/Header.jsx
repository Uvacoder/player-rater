import React from 'react'

export default function Header() {
    return (
        <div className="jumbotron mt-2">
        <h1 className="display-4">Rotorink Player Rater</h1>
        <p className="lead">Welcome to the hockey player rater. Rotorink is a growing community of hockey fans.</p>
        <hr className="my-4"></hr>
        <p>Follow us on twitter @rotorink</p>
        <a className="btn btn-dark btn-lg" href="https://twitter.com/rotorink" role="button">Learn more</a>
        </div>
    );
  }