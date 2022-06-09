import { combineReducers } from 'redux';
import ListReducer from './ListReducer'
import MovieReducer from './MovieReducer'
import AuthReducer from "./AuthReducer"
export default combineReducers({ ListReducer, MovieReducer, AuthReducer });