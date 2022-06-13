import { LOGIN, LOGIN_FAIL, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../ActionTypes/actionTypes"
import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT } from './../ActionTypes/actionTypes';


export const register = (user) => async (dispatch) => {
    console.log(user)
    dispatch({
        type: REGISTER
    })
    try {
        const res = await axios.post(`/auth/register`, user)
        localStorage.setItem("token", res.data.accessToken)
        console.log(res.data)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        // localStorage.setItem(
        //     process.env.REACT_APP_LOCALHOST_KEY,
        //     JSON.stringify(res.data.user)
        // );
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        })
    }
}


export const login = (User) => async (dispatch) => {
    console.log(User.email)
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
