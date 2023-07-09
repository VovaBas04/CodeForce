import React from 'react';
import Cookies from "js-cookie";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import './Task.css'

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
    const onKeyDown = e => {
      if (e.key === 'Tab') {
        e.preventDefault();

        const
          input = e.target,
          val = input.value,
          start = input.selectionStart,
          end = input.selectionEnd;
          input.value = val.substring(0, start) + '\t' + val.substring(end);
        input.selectionStart = input.selectionEnd = start + 1;
        return false;

        // input.setSelectionRange(pos, pos);
      }
    }

    return(
        <div className="container">
            <h1 className="mt-5">{task.title}</h1>
            <p className="mt-3">{task.task}</p>
            <div className="input-group mt-3">
                <textarea
                       id ='textbox'
                       className="form-control text-white bg-dark-subtle"
                       placeholder='print("Hello world!")'
                       name='code'
                       rows="10"
                       onKeyDown={onKeyDown}
                ></textarea>
            </div>
            <button type="button" className="mt-5 btn btn-outline-secondary" tabIndex="-1" >Отправить</button>
            <button type="button" id = "Right_Wing" className="mt-5 btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" tabIndex="-1" data-bs-toggle="dropdown" aria-expanded="false">
                        Язык программирования
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Python</a></li>
                <li><a className="dropdown-item" href="#">C++</a></li>
            </ul>
        </div>
    );
};

export default Task;