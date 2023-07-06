import React from "react";
import { connect} from "react-redux";
import {login} from "../actions/auth";
import { useState} from "react";
import {Link} from "react-router-dom";
import CSRFToken from "../components/CSRFToken";
import { useNavigate } from "react-router-dom";

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
       username: '',
       password: '',
    });

    const navigate = useNavigate();
    const { username, password} = formData;

    const onSubmit = e => {
      e.preventDefault();
      login(username, password);
    };
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    if (isAuthenticated){
        return navigate("/dashboard");
    }


    return(
    <div className='container mt-5'>
        <h1>Зайти в свою учетную запись </h1>
        <p>Заходи</p>
        <form onSubmit={e => onSubmit(e)}>
            <CSRFToken/>
            <div className='form-group'>
                <label className='form-label'>Логин: </label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Логин*'
                    name='username'
                    onChange={e => onChange(e)}
                    value={username}
                    required
                />
            </div>
            <div className='form-group'>
                <label className='form-label mt-3'>Пароль: </label>
                <input
                    className='form-control'
                    type='password'
                    placeholder='Пароль*'
                    name='password'
                    onChange={e => onChange(e)}
                    value={password}
                    minLength='6'
                    required
                />
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Войти</button>
        </form>
        <p className='mt-3'>Первый раз на сайте? <Link to='/register'>Зарегистрироваться</Link>

        </p>
    </div>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {login})(Login);