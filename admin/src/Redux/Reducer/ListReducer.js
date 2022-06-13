import { GET_LIST,ADD_LIST, GET_LIST_FAIL, GET_LIST_SECCESS, DELETE_LIST } from "../ActionTypes"


const initialState = {
    loading: false,
    List: [],
    error: null,
    msg: null
}

const MovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_LIST:
            return { ...state, loading: true }
        case GET_LIST_SECCESS:
            return {
                ...state, loading: false, List: payload, error: null
            }
        case GET_LIST_FAIL:
            return {
                ...state, loading: false, error: payload, List: []
            }
        case DELETE_LIST:
        case ADD_LIST:
            return {
                ...state, msg: payload
            }
        default:
            return state
    }
}

export default MovieReducer