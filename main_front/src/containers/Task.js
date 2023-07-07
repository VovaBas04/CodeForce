import React from 'react';
import Cookies from "js-cookie";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

export const config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Vary':'Accept'
        }
    };
const Task = (props) =>{
    const {id} = useParams();
    const [task, setTask] = useState({author: 0,
       id: 0,
       image: '',
        task: '',
        test_input: '',
        test_output: '',
        title: ''});

    useEffect(()=>{axios.get(`${process.env.REACT_APP_API_URL}/profile/tasks/${id}`, config)
        .then(res => {
            console.log(res.data)
            setTask(res.data)
            })
    }, [id]);
    return(
        <div className="container">
            <h1 className="mt-5">{task.title}</h1>
            <p className="mt-3">{task.task}</p>
            <div className="input-group mt-3">
                <textarea
                       className="form-control"
                       placeholder='print("Hello world!")'
                       name='code'
                       rows="10"/>
                    <button type="button" className="btn btn-outline-secondary">Отправить</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Python</a></li>
                        <li><a className="dropdown-item" href="#">C++</a></li>
                    </ul>
            </div>
        </div>
    );
};

export default Task;