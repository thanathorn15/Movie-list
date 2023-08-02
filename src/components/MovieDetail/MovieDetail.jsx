import {useState,useEffect} from 'react'
import ReactPlayer from 'react-player'

function MovieDetail() {
  return (
    <div>
        <ReactPlayer
            className=' w-full h-full mx-auto mt-10'
            url= 'https://www.youtube.com/watch?v=oQJpioFRHV0'
            controls = {true}

          />
    </div>
  )
}

export default MovieDetail