import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Description.css'
const Description = ({ListsMovies}) => {
  const params= useParams()
  console.log(params)
   const movieDesc=ListsMovies.find(el => el.id === +params.id) 
  return (
    <div className="ca">
    <>
    <Link to={'/'}>  <button> home </button> </Link> 
     <div className='desc'>{movieDesc.description}</div>
     <div className='trai'> {movieDesc.Trailer} </div> 
    </>
    </div>
  )
}
export default Description