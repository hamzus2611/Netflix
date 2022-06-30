import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "../ActionTypes";

const initialState = {
  Loading: false,
  User: [],
  Error: false,
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state, Loading: true };
    case GET_USER_SUCCESS:
      return {
        ...state,
        Loading: false,
        User: payload,
        error: false,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        Loading: false,
        User: null,
        error: payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
