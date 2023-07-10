import Cookies from "js-cookie";
import axios from "axios";
import {TASK_ADDING_FAIL, TASK_ADDING_SUCCESS, TASK_SENDING_FAIL, TASK_SENDING_SUCCESS} from "./types";

export const addtask = (task,title) => async dispatch => {
    const formData = new FormData();
    const file_input = document.querySelector('input[name="test_input"]')
    const file_output = document.querySelector('input[name="test_output"]')
    const image = document.querySelector('input[name="image"]')
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
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
    formData.append('test_input', file_input.files[0])
    formData.append('test_output', file_output.files[0])
    if (image.files[0]!==undefined)
        formData.append('image', image.files[0])
    // formData.append('author', author)
    formData.append('title', title)
    formData.append('task', task)
    console.log(formData)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/profile/tasks`, formData,config).then((re) => {
                console.log(re.data);
                console.log(re.status)
            }
        )
        console.log("Привет из tasks")
        // if (res.data.error) {
        //     console.log(res);
        //     dispatch({
        //         type: TASK_ADDING_FAIL
        //     });
        //  console.log(res);
        dispatch({
            type: TASK_ADDING_SUCCESS
        })
    //
    } catch (err) {
        dispatch({
            type: TASK_ADDING_FAIL
        });
    }
}

export const sendtask = (id, programm) => async dispatch => {
    let data = {}
    const formData = new FormData();
    formData.append('id', id);
    formData.append('programm', programm);
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/profile/test`, formData,config)
            .then((re) => {
                console.log(re.data)
                data = re.data
            }
        )

        dispatch({
            type: TASK_SENDING_SUCCESS
        })
        return(data)
    //
    } catch (err) {
        dispatch({
            type: TASK_SENDING_FAIL
        });
    }
}