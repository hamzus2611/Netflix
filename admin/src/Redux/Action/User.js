import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "../ActionTypes";
import axios from 'axios';

export const getUser = () => async (dispatch) => {
    dispatch({
        type: GET_USER
    })
    try {
        let res = await axios.get("/user/getallusers");
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload: error.res.data
        })
    }
}