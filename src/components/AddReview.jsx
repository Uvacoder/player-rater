import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import PlayerRater from '../apis/PlayerRater'

const AddReview = () => {
    const { id } = useParams()
    const history = useHistory()
    const location = useLocation()
    const [ name, setName ] = useState("")
    const [ rating, setRating ] = useState(1)
    const [ reviewText, setReviewText ] = useState("")

    const handleSubmitReview = async (e) => {
       e.preventDefault()
       try {
           const newReview = await PlayerRater.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
            })
            history.push('/')
            history.push(location.pathname)
       } catch (err) { console.log(err) }
    }
 
    return (
        <div className="mb-2 mt-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control form-control-sm" type="text" placeholder="name"></input>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select value={rating} onChange={e => setRating(e.target.value)} id="rating" className="form-control form-control-sm">
                            <option disabled>Rating</option>
                            <option value="1" disabled>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="Review">Comment</label>
                    <textarea value={reviewText} onChange={e => setReviewText(e.target.value)} className="form-control" id="Review" rows="4"></textarea>
                </div>

                <button onClick={handleSubmitReview} type="submit" className="btn btn-primary mb-2">Comment</button>
            </form>
        </div>
    )
}

export default AddReview