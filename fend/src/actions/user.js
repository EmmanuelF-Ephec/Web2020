import axios from 'axios';

import { GET_USER } from './types';

// Get User 
export const getUser = () => dispatch => {
    axios.get('utilisateurs/')
        .then (res => {
            dispatch({
                type: GET_USER,
                payload : res.data
            })
        })
        .catch(err => console.log(err));
}

// Create user 

