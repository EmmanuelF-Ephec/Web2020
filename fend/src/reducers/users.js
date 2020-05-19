import * as type from '../actions/types'

const initialState= {
    users: [],
    show: false,
    alertMessage: ""
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case type.DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id != action.payload)
            }
        case type.CREATE_USER:
            return {
                ...state,
            }
        case type.SHOW_FORM:
            return {
                ...state,
                show: action.payload
            }
        case type.SHOW_ALERTMESSAGE:
            return {
                ...state,
                alertMessage: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;