import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../api/movieApi'
import { APIKey } from '../../api/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async() => {
    const movieText = "Harry"
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err: any) => {
        console.log("Error", err)
    })
    //@ts-ignore
   return response.data

})
const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
    },
 extraReducers: {
     //@ts-ignore
    [fetchAsyncMovies.pending]: () => {
        console.log("Pending")
    },
    //@ts-ignore
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("Fetched")
        return {...state, movies: payload}
    },
    //@ts-ignore
    [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected")
    },
 }
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state: any) => state.movies.movies
export default movieSlice.reducer