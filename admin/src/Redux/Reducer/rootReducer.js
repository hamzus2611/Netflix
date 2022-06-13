import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer'
import ListReducer from "./ListReducer"
import AuthReducer from './AuthReducer';

export default combineReducers({ MovieReducer, ListReducer, AuthReducer });