import axios from "axios";
import { GET_MOVIE, GET_RANDOM } from "../ActionTypes/actionTypes"




export const get_movie = (id) => async (dispatch) => {
    try {
        console.log(id)
        let res = await axios.get(`/movie/get/${id}`)
        dispatch({
            type: GET_MOVIE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
// get movie random
export const get_movie_random = (type) => async (dispatch) => {
    try {


        let res = await axios.get(`/movie/random/?type=${type}`)
        dispatch({
            type: GET_RANDOM,
            payload: res.data[0]
        })
    } catch (error) {
        console.log(error)
    }
}
