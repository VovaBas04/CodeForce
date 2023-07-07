import Cookies from "js-cookie";
import axios from "axios";
import {TASK_ADDING_FAIL, TASK_ADDING_SUCCESS} from "./types";

export const addtask = function(author, id,task,title) {
    const file_input=document.querySelector('input[name="test_input"]')
    const file_output=document.querySelector('input[name="test_output"]')
    const image=document.querySelector('input[name="image"]')
    console.log('PIPEC');
    console.log(image.files[0],file_input.files[0])
    async function dispatch() {


        const config = {
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        let body={
                   author: author,
                   id: id,
                   image: image.files[0],
                    task: task,
                    test_input:file_input.files[0],
                    test_output: file_output.files[0],
                    title: title
        }
        // const body = JSON.stringify({author, id, image, task, test_input, test_output, title})
        //         const body = JSON.stringify({author, id, task, title})
        // body.append('test_input',file_input.files[0])
        // body.append('test_output',file_output.files[0])
        //  body.append('image',image.files[0])
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/profile/tasks`, body,config).then((re) => {
                    console.log(re.data);
                    console.log(re.status)
                }
            )
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
    }
    dispatch()
};