import { useEffect } from "react"
import MovieListing from "./MovieListing/MovieListing"
import movieApi from '../api/movieApi'
import { APIKey } from '../api/movieApiKey'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { addMovies } from '../store/movies/movieSlice'

const Home = () => {

    const movieText = "Harry"
    const dispatch = useDispatch()

    useEffect(() => {

        const fetchMovies = async() => {
            const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err: any) => {
                console.log("Error", err)
            })
            //@ts-ignore
           dispatch(addMovies(response.data))
        }
        fetchMovies()
    }, [])
    return ( 
        <>
        <h1>HHH</h1>
        <MovieListing />
        </>
    )
}

export default Home