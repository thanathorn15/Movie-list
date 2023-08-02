import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

function MovieListing() {
const {movies} = useSelector((state) => state.movies)
  return (
    <div className='grid grid-cols-4 '>
        {movies && movies.map((movie ) => (
            <MovieCard key={movie.imbID} movie={movie}/>
        ))}
        </div>
  )
}

export default MovieListing