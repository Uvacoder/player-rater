import React from 'react'
import UpdatePlayer from '../components/UpdatePlayer'
import { Link } from "react-router-dom";

export default function UpdatePage() {

    return (
      <div className="update-page mt-4">
        <div className="card">
          <h5 className="card-header">Update Player</h5>
          <div className="card-body">
            <h5 className="card-title">Admin Access Only</h5>
            <p className="card-text">Edit player information</p>
            <Link to="/" className="btn btn-primary">All Players</Link>
          </div>
        </div>
        <UpdatePlayer />
      </div>
    );
  }
  