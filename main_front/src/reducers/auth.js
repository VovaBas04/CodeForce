import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    RESET_FAIL,
    RESET_SUCCESS
} from "../actions/types";

const initialState = {
    isLoginIncorrect: false,
    isRegisterIncorrect: false,
    isAuthenticated: false,
    isResetIncorrect: false,
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
                isRegisterIncorrect: false,
                isLoginIncorrect: false

            });
        case LOGIN_SUCCESS:
            return ({
                ...state,
                isAuthenticated: true,
                isLoginIncorrect: false,
                isRegisterIncorrect: false,
                username: payload
            });
        case LOGOUT_SUCCESS:
            return ({
                 ...state,
            isAuthenticated: false,
                isLoginIncorrect: false,
                isRegisterIncorrect: false,
                username: ''
            });
        case LOGIN_FAIL:
            return ({
                ...state,
                isLoginIncorrect: true,
            });
        case LOGOUT_FAIL:
            return state
        case REGISTER_FAIL:
            return ({
                ...state,
                isRegisterIncorrect: true
            });
        case RESET_SUCCESS:
            return ({
                ...state,
                isResetIncorrect: false
            });
        case RESET_FAIL:
            return ({
                ...state,
                isResetIncorrect: true
            });
        default:
            return state;
    }
};
