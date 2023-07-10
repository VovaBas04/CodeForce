import {
    TASK_ADDING_SUCCESS,
    TASK_ADDING_FAIL,
} from "../actions/types";

const initialState = {
     isAddingFailed: false,
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
                isAddingFailed: false
            });
        case TASK_ADDING_FAIL:
            return ({
                ...state,
                isAddingFailed: true
            });
        default:
            return state;
    }
};