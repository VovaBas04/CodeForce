import Cookies from "js-cookie";
import axios from "axios";
import {TASK_ADDING_FAIL, TASK_ADDING_SUCCESS} from "./types";

export const addtask = function(author, id, image,task,test_input,test_output,title) {

    console.log('PIPEC');
    return async function dispatch() {


        // const config = {
        //     headers: {
        //         'Accept':'application/json',
        //         'Content-Type':'application/json',
        //         'X-CSRFToken': Cookies.get('csrftoken')
        //     }
        // };

        const body = JSON.stringify({author, id, image, task, test_input, test_output, title});
        console.log("перед трай");
        console.log(body);
        try {
            console.log("перед аксиос");
            console.log(res);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/profile/tasks`, body).then((re) => {
                    console.log(re.data);
                }
            )
            console.log("после аксиос");
            console.log(res);
            if (res.data.error) {
                console.log(res);
                dispatch({
                    type: TASK_ADDING_FAIL
                });
            } else {
                console.log(res);
                dispatch({
                    type: TASK_ADDING_SUCCESS
                })
            }
        } catch (err) {
            dispatch({
                type: TASK_ADDING_FAIL
            });
        }
    };
};