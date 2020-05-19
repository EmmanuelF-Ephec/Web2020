import * as type from './types';
import axios from 'axios';
var jwt_decode = require('jwt-decode');

export const authStart = () => {
    return {
        type: type.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: type.AUTH_SUCCESS,
        token: token,
        user : jwt_decode(token.access),
    }
}

export const authFail = error => {
    return {
        type: type.AUTH_FAIL,
        error : error
    }
}

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expirationDate');
    return {
        type: type.AUTH_LOGOUT
    }
}

/*export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000) // SetTimeout in ms
    }
}
*/

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        return axios.post(`/token/`,JSON.stringify({
            username: email,
            password: password
        }))
        .then(res => {        
            
            const data = res.data;
            
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            localStorage.setItem('expirationDate', expirationDate); // Stockage permanent dans le navigateur

            dispatch(authSuccess(data));

            // dispatch(checkAuthTimeout(3600)) // 3600 sec avec timeout
        })
        .catch(err => {
            console.error(err)
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (email, password, lastName, firstName) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration',{
            email: email,
            password: password,
            lastName: lastName,
            firstName: firstName
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('access_token', token);
            localStorage.setItem('expirationDate', expirationDate); // Stockage permanent dans le navigateur
            dispatch(authSuccess(token));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('access_token');
        if (token === undefined) {
            dispatch(logout());
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date()) {
                dispatch(logout());
            }
            else {
                dispatch(authSuccess(token));
               // dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}