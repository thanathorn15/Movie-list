import {useState,useEffect} from 'react'
import MovieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux'
import {addMovie} from '../../store/Reducer'
import MovieListing from '../MovieListing.jsx/MovieListing'

function Home() {
    const dispatch = useDispatch()
    const [search,setSearch] = useState("")

    useEffect (()=> {
    const fetchMovies = async () => {
    const searchKey = search ? search : "spider";
    const res = await MovieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)

    setTimeout (() => {
    dispatch(addMovie(res.data.Search))
    },500)
}
fetchMovies()
    },[search])
  return (
    <div className='m-4'>
        <h3 className='m-[1rem 0]'>Movies</h3>
        <input className='border border-black px-2' type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <MovieListing/>
    </div>
  )
}

export default Home