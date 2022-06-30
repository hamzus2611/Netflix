import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer'
import ListReducer from "./ListReducer"
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';

export default combineReducers({ MovieReducer, ListReducer, AuthReducer,UserReducer });