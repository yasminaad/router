import React from "react";
import "./Filter.css";
import StarRatingComponent from 'react-star-rating-component';


const Filter = ({updateinput,updaterate}) => {
  
  return (
    
    <div className="search-header">
      <div className="search-content">  
        <form className="search">
          <input type="text"  placeholder="Search Movies with title" onChange={(e)=>updateinput(e.target.value)}/>
          <span style={{color:"white"}}>OR</span>
          <StarRatingComponent
            name="rate" /* name of the radio input, it is required */
            onStarClick={(value)=>updaterate(value)}
           
          />
        </form>
        
      </div>
    </div>
  );
};

export default Filter;