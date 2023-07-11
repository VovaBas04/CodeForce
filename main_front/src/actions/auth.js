import axios from "axios";
import Cookies from 'js-cookie'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    RESET_FAIL,
    RESET_SUCCESS,
    DELETE_SUCCESS,
    DELETE_FAIL
} from "./types";

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, body, config);

        if (res.data.success) {
            dispatch({
                type: LOGIN_SUCCESS
            });

            // dispatch(load_user());
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };
    console.log("Привет из logout")
    const body = JSON.stringify({
        'withCredentials': true
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/logout`, body, config);

        if (res.data.success) {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOGOUT_FAIL
        });
    }
};
export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ username, password, re_password});
    console.log('register')
    console.log(body)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`, body, config)

        if (res.data.error){
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            })
        }
    } catch(err) {
        dispatch({
                type: REGISTER_FAIL
        });
    }
};

export const reset = (password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };
    console.log(password, re_password)

    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/accounts/delete`, config)

        const username = res.data.username
        dispatch({
            type: DELETE_SUCCESS
        })
        return(username)
    }catch(err) {
        dispatch({
                type: DELETE_FAIL
        });
    }
};

