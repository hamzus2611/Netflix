import { GET_MOVIE, GET_RANDOM } from "../ActionTypes/actionTypes";

const initialState = {
    movie: [],
    Loading: false,
    randommovie: []
}

const MovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_MOVIE:
            return {
                ...state,
                movie: payload,
                Loading: true,
            }
        case GET_RANDOM:
            return {
                ...state,
                randommovie: payload,
                Loading: true,
            }
        default:
            return state
    }
}
export default MovieReducer;