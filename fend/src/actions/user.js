import axios from 'axios';

import { GET_USER, CREATE_USER, DELETE_USER } from './types';

// Get User 
export const getUser = () => dispatch => {
    axios.get('users/')
        .then (res => {
            dispatch({
                type: GET_USER,
                payload : res.data
            })
        })
        .catch(err => console.log(err));
}

// Create user 

export const createUser = (user) => dispatch => {
    axios.post('users/')
        .then( res => {
            dispatch({
                type: CREATE_USER,
                payload : res.data
            })
        })
        .catch(err => console.log(err));
}

// Delete User 

export const deleteUser = (id) => dispatch => {
    axios.delete(`users/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}