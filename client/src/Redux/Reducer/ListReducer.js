import { GET_LIST, LOGIN } from "../ActionTypes/actionTypes"


const initialState = {
    List: [],
    Loading: false,

}

const ListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_LIST:
            return {
                ...state,
                List: payload,
                Loading: true,
            };
        case LOGIN:
            return {
                ...state,
            };
        default:
            return state
    }
}
export default ListReducer;