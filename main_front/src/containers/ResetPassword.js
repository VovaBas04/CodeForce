import React from "react";
import { connect} from "react-redux";
import {reset, register} from "../actions/auth";
import { useState} from "react";
import {Link} from "react-router-dom";
import CSRFToken from "../components/CSRFToken";
import { useNavigate } from "react-router-dom";
import {createPortal} from "react-dom";
import Modal from "../components/Modal";
import './Login.css'


const incorrectMessage = (isLoginIncorrect) => {
    if(isLoginIncorrect){
        return (
        <div id="errorMessage" className="mt-3">Такого пользователя не существует</div>
    )}
    return null;

}
const repasswordMessage = (isResetIncorrect) => {
    if(isResetIncorrect){
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

const ResetPassword = ({reset, register, isAuthenticated, isResetIncorrect}) => {
    const [formData, setFormData] = useState({
       password: '',
       re_password: ''
    });

    const [isRepasswordIncorrect, setIsRepasswordIncorrect] = useState(false);
    // const [ignored, forceUpdate] = useState(x => x+1, 0);
    const [passwordChanged, setPasswordChanged] = useState(false);

    const navigate = useNavigate();
    const { password, re_password } = formData;
    console.log(isResetIncorrect + 'do')
    const onSubmit = e => {
      e.preventDefault();
      resetColor();
      if(password === re_password){
          setIsRepasswordIncorrect(false);
            reset(password, re_password)
            .then(response =>{
                console.log(response)
                if (!isResetIncorrect)
                    setPasswordChanged(true);
                if(response)
                    register(response, password, re_password)
            });
        // forceUpdate();
      }
      else{
          setIsRepasswordIncorrect(true);

      }
    };
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    if (passwordChanged && !isResetIncorrect)
        return navigate("/login");

    return(
    <div className='container mt-5'>
        <h1>Изменение пароля</h1>
        <p>Введите новый пароль</p>
        <form onSubmit={e => onSubmit(e)}>
            <CSRFToken/>
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
        {repasswordMessage(isRepasswordIncorrect)}
    </div>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isResetIncorrect: state.auth.isResetIncorrect,
});
export default connect(mapStateToProps, {reset, register})(ResetPassword);