import Cookies from "js-cookie";
import axios from "axios";
import {TASK_ADDING_FAIL, TASK_ADDING_SUCCESS} from "./types";

export const addtask = function(author, id,task,title) {
    const formData = new FormData();
    const file_input=document.querySelector('input[name="test_input"]')
    const file_output=document.querySelector('input[name="test_output"]')
    const image=document.querySelector('input[name="image"]')
    let count=0;
    function dispatch() {


        const config = {
            headers: {
                'Accept':'application/json',
                'Content-Type':'multipart/form-data',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        // let body={
        //            author: author,
        //            id: id,
        //            image: image.files[0],
        //             task: task,
        //             test_input:file_input.files[0],
        //             test_output: file_output.files[0],
        //             title: title
        // }
        // const body = JSON.stringify({author, id, image, task, test_input, test_output, title})
        //         const body = JSON.stringify({author, id, task, title})
        // body.append('test_input',file_input.files[0])
        // body.append('test_output',file_output.files[0])
        //  body.append('image',image.files[0])
        formData.append('test_input',file_input.files[0])
        formData.append('test_output',file_output.files[0])
        formData.append('image',image.files[0])
        formData.append('author',author)
        formData.append('title',title)
        formData.append('task',task)
        try {
            const res = axios.post(`${process.env.REACT_APP_API_URL}/profile/tasks`, formData,config).then((re) => {
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
    if (count===0) {
        dispatch()
        count += 1
    }
};