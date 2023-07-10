import React from "react";
import { connect} from "react-redux";
import { register} from "../actions/auth";
import { useState } from "react";
import {Link} from "react-router-dom";
import CSRFToken from "../components/CSRFToken";
import { useNavigate } from "react-router-dom";
import './Register.css'


const incorrectMessage = (isRegisterIncorrect) => {
    if(isRegisterIncorrect){
        return (
        <div id="errorMessage" className="mt-3">Такой пользователь уже существует</div>
    )}
    return null;
}

const repasswordMessage = (isRepasswordIncorrect) => {
    if(isRepasswordIncorrect){
        return (
        <div id="errorMessage" className="mt-3">Пароли не совпадают</div>
    )}
    return null;
}

const resetColor = () =>{
    const err = document.getElementById('errorMessage');
        if (err){
            err.style.animation = 'none';
            setTimeout(() => err.style.animation = 'bs 3s 1',100);
        }
}
const Register = ({register, isAuthenticated, isRegisterIncorrect}) => {
    const [formData, setFormData] = useState({
       username: '',
       password: '',
       re_password: ''
    });

    const [isRepasswordIncorrect, setIsRepasswordIncorrect] = useState(false);
    // const [ignored, forceUpdate] = useState(x => x+1, 0);
    const [accountCreated, setAccountCreated] = useState(false);

    const navigate = useNavigate();
    const { username, password, re_password } = formData;
    console.log(isRegisterIncorrect + 'do')
    const onSubmit = e => {
      e.preventDefault();
      resetColor();
      if(password === re_password){
          setIsRepasswordIncorrect(false);
        register(username, password, re_password)
            .then(response =>{
                console.log(isRegisterIncorrect)
                if (!isRegisterIncorrect)
                    setAccountCreated(true);
            });
        // forceUpdate();
      }
      else{
          setIsRepasswordIncorrect(true);

      }
    };
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    if (isAuthenticated)
        return navigate("/dashboard");
    else if (accountCreated && !isRegisterIncorrect)
        return navigate("/login");

    return(
    <div className='container mt-5'>
        <h1>Регистрация аккаунта</h1>
        <p>Заполните обязательные поля</p>
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
            <div className='form-group'>
                <label className='form-label mt-3'>Подтвердите пароль: </label>
                <input
                    className='form-control'
                    type='password'
                    placeholder='Пароль*'
                    name='re_password'
                    onChange={e => onChange(e)}
                    value={re_password}
                    minLength='6'
                    required
                />
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Отправить</button>
        </form>
        {repasswordMessage(isRepasswordIncorrect) || incorrectMessage(isRegisterIncorrect)}
        <p className='mt-3'>Уже есть учетная запись? <Link to='/login'>Войти</Link>

        </p>
    </div>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isRegisterIncorrect: state.auth.isRegisterIncorrect
});
export default connect(mapStateToProps, {register})(Register);