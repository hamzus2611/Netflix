import axios from 'axios';
import { LOGIN, LOGIN_FAIL, LOGOUT } from '../ActionTypes';
import { LOGIN_SUCCESS } from './../ActionTypes';

export const login = (User) => async (dispatch) => {
    dispatch({
        type: LOGIN
    });
    try {
        const res = await axios.post("/auth/login", User)
        localStorage.setItem("token", res.data.accessToken)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        // localStorage.setItem(
        //     process.env.REACT_APP_LOCALHOST_KEY,
        //     JSON.stringify(res.data.user)
        // );
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })
    }
}

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT
    })
    localStorage.clear()
}
