import { GET_LIST, GET_LIST_FAIL, GET_LIST_SECCESS, DELETE_LIST, ADD_LIST } from "../ActionTypes";
import axios from 'axios';


export const getlist = () => async (dispatch) => {
    dispatch({
        type: GET_LIST
    })
    try {
        let res = await axios.get("/list/get");
        dispatch({
            type: GET_LIST_SECCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_LIST_FAIL,
            payload: error.res.data
        })
    }
}

export const deletelist = (id) => async (dispatch) => {

    try {
        let res = axios.delete(`/list/deletelist/${id}`)
        dispatch({
            type: DELETE_LIST,
            payload: res.data
        })
    } catch (error) {
        alert(error.response.data)
    }
}


export const CreateList = (List) => async (dispatch) => {

    try {
        let res = axios.post("/list/createList", List)
        dispatch({
            type: ADD_LIST,
            payload: res.data
        })
    } catch (error) {
        alert(error.response.data)
    }

}
