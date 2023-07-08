import {
    TASK_ADDING_SUCCESS,
    TASK_ADDING_FAIL,
    TASK_ADDING_RELOAD
} from "../actions/types";

const initialState = {
     is_Create: false,
     author: '',
       id: '',
       image: '',
        task: '',
        test_input: '',
        test_output: '',
        title: ''
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case TASK_ADDING_SUCCESS:
            return ({
                ...state,
                is_created: payload.is_created
            });
        case TASK_ADDING_RELOAD:
            return ({
            ...state,
            is_created: false
        })
        case TASK_ADDING_FAIL:
            return state;
        default:
            return state;
    }
};