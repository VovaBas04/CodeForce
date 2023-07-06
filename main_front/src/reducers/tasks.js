import {
    TASK_ADDING_SUCCESS,
    TASK_ADDING_FAIL
} from "../actions/types";

const initialState = {
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
                author: payload.author,
                id: payload.id,
                image: payload.image,
                task: payload.task,
                test_input: payload.test_input,
                test_output: payload.test_output,
                title: payload.title
            });
        case TASK_ADDING_FAIL:
            return state;
        default:
            return state;
    }
};