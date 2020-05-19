import { GET_USERS } from "../actions/types.js"

const initialState = {
    user: {
        email: "admin@admin.com",
        lastName: 'Foureau',
        firstName: 'Emmanuel',
        password: 1234,
        is_staff: 1
    }
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default : 
            return state;
    }
}