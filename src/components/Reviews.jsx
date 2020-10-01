import React from 'react'
import StarRating from './StarRating'

const Reviews = ({ reviews }) => {
    
    return (
        <div className="container row row-cols-3 mb-2 mt-4 d-flex">
            {reviews.map((review) => {
                return (
           <div key={review.id} className="card text-white bg-primary mb-3 ml-2 mr-2" style={{maxWidth: "30%"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>{review.name}</span>
                    <span><StarRating rating={review.rating} /></span>
                </div>
                <div className="card-body bg-dark text-white">
                   {/*  <h5 className="card-title">Light card title</h5> */}
                <p className="card-text">{review.review}</p>
                </div>
            </div>
                )
            })}
        </div>
    )
}

export default Reviews