import { getAllMovies } from "../../store/movies/movieSlice"
import {useSelector } from "react-redux"
import styles from "../MovieListing/MovieListing.module.scss"
import MovieCard from "../MovieCard/MovieCard"
import { Key } from "react"

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    let renderMovies = "";
    console.log(movies)
    renderMovies = 
        movies.Response === "True" ?
            (movies.Search.map((movie: any, index: Key | null | undefined) => (
                <MovieCard key={index} data={movie} />
            ))) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
    
    return (
        <div className={styles.movieWrapper}>
            <div className={styles.movieList}>
                <h2>Movies</h2>
                <div className={styles.movieContainer}>
                {renderMovies} 
                </div>
            </div>
        </div>
    )

}

export default MovieListing