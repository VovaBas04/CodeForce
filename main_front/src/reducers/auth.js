import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../actions/types";

const initialState = {
    isIncorrect: false,
    isAuthenticated: null,
    username: '',
    first_name: '',
    last_name: '',
    phone: '',
    city: '',
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case REGISTER_SUCCESS:
            return ({
                 ...state,
            isAuthenticated: false,
                isIncorrect: false

            });
        case LOGIN_SUCCESS:
            return ({
                ...state,
                isAuthenticated: true,
                isIncorrect: false,
                username: payload
            });
        case LOGOUT_SUCCESS:
            return ({
                 ...state,
            isAuthenticated: false,
                isIncorrect: false,
                username: ''
            });
        case LOGIN_FAIL:
            return ({
                ...state,
                isIncorrect: true
            });
        case LOGOUT_FAIL:
            return state
        case REGISTER_FAIL:
            return ({
                ...state,
                isIncorrect: true
            });
        default:
            return state;
    }
};