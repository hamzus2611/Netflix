import axios from "axios";
import { GET_LIST } from "../ActionTypes/actionTypes"


export const getlist = (Types, genre) => async (dispatch) => {
    try {
        let res = await axios.get(`/list/get${Types ? "?type=" + Types : ""}${genre ? "&genre=" + genre : ""}`);
        dispatch({
            type: GET_LIST,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
