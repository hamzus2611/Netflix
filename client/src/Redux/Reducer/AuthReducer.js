
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT } from './../ActionTypes/actionTypes';


const initialState = {
    User: null,
    Loading: false,
    Error: null
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN:
        case REGISTER:
            return { ...state, Loading: true }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            {
                return { ...state, Loading: false, User: payload, Error: null }
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            {
                return { ...state, Loading: false, User: null, Error: payload }
            }
        case LOGOUT:
            {
                return { ...state, Loading: false, User: null, Error: null }
            }
        default:
            return state
    }
}
export default AuthReducer