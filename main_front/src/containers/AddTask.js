import React from "react";
import { connect} from "react-redux";
import { register} from "../actions/auth";
import { useState} from "react";
import {Link} from "react-router-dom";
import CSRFToken from "../components/CSRFToken";
import {redirect} from "react-router-dom";
import {addtask} from "../actions/tasks";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [formData, setFormData] = useState({
       author: '',
       id: '',
       image: '',
        task: '',
        test_input: '',
        test_output: '',
        title: ''
    });
     const [taskCreated, setTaskCreated] = useState(false);
 const navigate = useNavigate();

    const { author, id, image,task,test_input,test_output,title } = formData;

    const onSubmit = e => {
      e.preventDefault();
      addtask(author, id, image,task,test_input,test_output,title);
      console.log('PIPA');
      setTaskCreated(true);
    };
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

     if (taskCreated)
        return navigate("/dashboard");

    return(
    <div className='container mt-5'>
        <h1>Добавить задачу</h1>
        <p>Здесь ты можешь добавить свою задачу в список</p>
        <form onSubmit={e => onSubmit(e)}>
            <CSRFToken/>
{/*`           <div className='form-group'>*/}
{/*                <label className='form-label mt-3'>Автор:</label>*/}
{/*                <input*/}
{/*                    className='form-control'*/}
{/*                    type='text'*/}
{/*                    placeholder='Автор*'*/}
{/*                    name='author'*/}
{/*                    onChange={e => onChange(e)}*/}
{/*                    value={author}*/}
{/*                    required*/}
{/*                />*/}
{/*            </div>*/}
            <div className='form-group'>
                <label className='form-label mt-3'>Автор:</label>
                <input
                    className='form-control'
                    type='number'
                    placeholder='автор*'
                    name='author'
                    onChange={e => onChange(e)}
                    value={author}
                    required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>ID:</label>
                <input
                    className='form-control'
                    type='number'
                    placeholder='id*'
                    name='id'
                    onChange={e => onChange(e)}
                    value={id}
                    required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>Картинка:</label>
                <input
                    className='form-control'
                    type='file'
                    placeholder='картинка*'
                    name='image'
                    onChange={e => onChange(e)}
                    value={image}
                    required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>Название:</label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Название*'
                    name='title'
                    onChange={e => onChange(e)}
                    value={title}
                    required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>Описание задачи: </label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Описание задачи*'
                    name='task'
                    onChange={e => onChange(e)}
                    value={task}
                    minLength='6'
                    required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>Тест инпут:</label>
                <input
                    className='form-control'
                    type='file'
                    placeholder='file*'
                    name='test_input'
                    onChange={e => onChange(e)}
                    value={test_input}
                    // required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>Тест аутпут:</label>
                <input
                    className='form-control'
                    type='file'
                    placeholder='file*'
                    name='test_output'
                    onChange={e => onChange(e)}
                    value={test_output}
                    // required
                />
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Добавить</button>
        </form>
    </div>
    );
};
// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });
// export default connect(mapStateToProps, {register})(AddTask);

export default AddTask;