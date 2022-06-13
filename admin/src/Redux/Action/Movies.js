
import { ADD_MOVIE, GET_MOVIES, GET_MOVIES_FAIL, GET_MOVIES_SECCESS, DELETE_MOVIE, GET_MOVIE_BYID } from './../ActionTypes';
import axios from 'axios';

export const getmovie = () => async (dispatch) => {
    dispatch({
        type: GET_MOVIES
    })
    try {
        let res = await axios.get("/movie");
        dispatch({
            type: GET_MOVIES_SECCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_MOVIES_FAIL,
            payload: error.res.data
        })
    }
}

export const deletemovie = (id) => async (dispatch) => {

    try {
        let res = axios.delete(`/movie/delete/${id}`)
        dispatch({
            type: DELETE_MOVIE,
            payload: res.data
        })
    } catch (error) {
        alert(error.response.data)
    }
}

export const getmoviebyid = (id) => async (dispatch) => {

    try {
        let res = axios.get(`/movie/get/${id}`)
        dispatch({
            type: GET_MOVIE_BYID,
            payload: res.data
        })
    } catch (error) {
        alert(error.response.data)
    }
}


export const addmovie = (movie) => async (dispatch) => {

    try {
        let res = axios.post("/movie/register", movie)
        dispatch({
            type: ADD_MOVIE,
            payload: res.data
        })
    } catch (error) {
        alert(error.response.data)
    }

}
