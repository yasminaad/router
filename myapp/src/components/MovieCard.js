import React from "react";
import "./MovieCard.css";
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'





const MovieCard = (props) => {
  const { title, description, posterUrl, rate, id } = props.movie
  return (
    <div className="card">
      <div className="poster">
        <img src={posterUrl} alt="" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <div className="rating">
          <StarRatingComponent
            name="rate" /* name of the radio input, it is required */
            value={rate} 
          />
        </div>
        <div className="info">
          <p>{description}</p>
        </div>
        <div className="info">
          <Link to={`/${id}`}> 
          <button> description</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;