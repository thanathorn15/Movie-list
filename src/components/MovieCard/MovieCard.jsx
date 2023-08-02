import React from 'react'
import { Link } from 'react-router-dom'


function MovieCard({movie}) {
  return (
    <div className='m-4'>
        <div className='card-image'>
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className='card-container'>
            <span className='card-title'>{movie.Title}</span>
            <p>Year : {movie.Year}</p>
        </div>
        <button className='border border-black h-8 w-24 rounded-lg text-white bg-black mt-2'>
            <Link to = {`movie/${movie.imdbID}`}>Watch Now</Link>
        </button>
        
    </div>
  )
}

export default MovieCard