import * as types from '../actions/types'
import { updateObject } from "../store/utility";
var jwt_decode = require('jwt-decode');

const initialState = {
    token: null,
    error: null, 
    loading : false,
    user : JSON.parse(localStorage.getItem('user')) 
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false,
        user: action.user
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.AUTH_START: return authStart(state,action);
        case types.AUTH_FAIL: return authFail(state,action);
        case types.AUTH_SUCCESS: return authSuccess(state,action);
        case types.AUTH_LOGOUT: return authLogout(state,action);
        default: return state;
    }
}

export default authReducer;