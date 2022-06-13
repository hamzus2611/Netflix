
import { GET_MOVIES, GET_MOVIES_SECCESS, GET_MOVIES_FAIL, DELETE_MOVIE, GET_MOVIE_BYID, ADD_MOVIE } from './../ActionTypes';

const initialState = {
    loading: false,
    movies: [],
    error: null, msg: null
}

const MovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_MOVIES:
            return { ...state, loading: true }
        case GET_MOVIES_SECCESS:
        case GET_MOVIE_BYID:
            return {
                ...state, loading: false, movies: payload, error: null
            }
        case GET_MOVIES_FAIL:
            return {
                ...state, loading: false, error: payload, movies: []
            }
        case DELETE_MOVIE:
        case ADD_MOVIE:
            return {
                ...state, msg: payload
            }
        default:
            return state
    }
}

export default MovieReducer