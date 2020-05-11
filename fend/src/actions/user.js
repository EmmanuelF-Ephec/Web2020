import axios from 'axios';

import { GET_USER } from './types';

// Get User 
export const getUser = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/utilisateurs/')
        .then (res => {
            dispatch({
                type: GET_USER,
                payload : res.data
            })
        })
        .catch(err => console.log(err));
}

// Create user 

