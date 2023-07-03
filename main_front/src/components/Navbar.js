import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
const Navbar = (props) => {
     //взаимодействие с состоянием из компоненты
    //для изменения состояния нужен диспатч
    const dispatch = useDispatch();
    //для получения состяния - useSelector
const cash = useSelector(state => state.cashR.cash);
    console.log(cash);

const addCash = () =>{
    dispatch({type: "ADD_CASH", payload: 5});
}
const getCash = () =>{
dispatch({type: "GET_CASH", payload: 5});
}
    return (
        <div>
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <button onClick={() => addCash()}>Пополнить счет</button>
            <button onClick={() => getCash()}>Снять со счета</button>
            <ul>
                Navbar
                <li>
                    <Link to={'/home'}>Go to Home</Link>
                </li>
                <li>
                    <Link to={'/'}>Log In</Link>
                </li>
                <li>
                    <Link to={'/reset-password'}>Reset Password</Link>
                </li>
                <li>
                    <Link to={'/signup'}>Sign Up</Link>
                </li>


            </ul>
        </div>
    );
}

export default Navbar;