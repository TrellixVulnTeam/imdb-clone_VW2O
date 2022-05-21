import { useEffect } from "react"
import MovieListing from "./MovieListing/MovieListing"
import movieApi from '../api/movieApi'
import { APIKey } from '../api/movieApiKey'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from "../store/movies/movieSlice"
const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchAsyncMovies())
    }, [dispatch])
    return ( 
        <>
        <MovieListing />
        </>
    )
}

export default Home