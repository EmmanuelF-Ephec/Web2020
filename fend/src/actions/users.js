import * as type from './types';
import axios from 'axios';

// Create user 

export const createUser = (user) => dispatch => {
    axios.post('users/', user)
        .then( res => {
            dispatch(showForm(true))
            dispatch({
                type: type.CREATE_USER,
                payload : res.data
            })
            dispatch(getUsers())
            dispatch(showAlert("L'utilisateur a bien été crée !"));
        })
        .catch(err => console.log(err));
}

// Delete User 

export const deleteUser = (id) => dispatch => {
    axios.delete(`users/${id}`)
        .then(res => {
            dispatch(showAlert("L'utilisateur a bien été supprimé !"));
            dispatch({
                type: type.DELETE_USER,
                payload: id
            })
        })
        .catch(err => console.log(err));
}
// Get all users

export const getUsers = () => dispatch => {
    axios.get('users/')
    .then(res => {
        dispatch({
            type: type.GET_USERS,
            payload: res.data
        })
    })
    return {
        type: type.GET_USERS

    }
}

// Get Show Form 

export const showForm = (showForm) => dispatch => {
    if (showForm === true) {
        dispatch(showAlert(""));
        showForm = false;
    }
    else {
        dispatch(showAlert(""));
        showForm = true;
    }
    dispatch({
        type: type.SHOW_FORM,
        payload: showForm
    })
}

// Change Alert Message

export const showAlert = (alertMessage) => dispatch => {
    dispatch({
        type: type.SHOW_ALERTMESSAGE,
        payload: alertMessage
    })
}