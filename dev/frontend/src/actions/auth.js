import * as type from './types';
import axios from 'axios';

export const authStart = () => {
    return {
        type: type.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: type.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: type.AUTH_FAIL,
        error : error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate')
    return {
        type: type.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000) // SetTimeout in ms
    }
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login/',JSON.stringify({
            email: email,
            password: password
        }),
        {headers : {
            "Content-Type": "application/json"
        }})
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expiratioDate', expirationDate); // Stockage permanent dans le navigateur
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600)) // 3600 sec avec timeout
        })
        .catch(err => {
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
            localStorage.setItem('token', token);
            localStorage.setItem('expiratioDate', expirationDate); // Stockage permanent dans le navigateur
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600)) // 3600 sec avec timeout
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
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
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}