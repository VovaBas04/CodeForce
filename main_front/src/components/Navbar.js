import {React, Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { connect} from "react-redux";
import {logout} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import './Navbar.css'
const Navbar = ({isAuthenticated, logout}) => {
     //взаимодействие с состоянием из компоненты
    //для изменения состояния нужен диспатч
//     const dispatch = useDispatch();
//     //для получения состяния - useSelector
// const cash = useSelector(state => state.cashR.cash);
//     console.log(cash);
//
// const addCash = () =>{
//     dispatch({type: "ADD_CASH", payload: 5});
// }
// const getCash = () =>{
// dispatch({type: "GET_CASH", payload: 5});
// }
const authLinks = (
    <Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="dashboard">Список задач</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="addtask">Добавить задачу</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/resetpassword">Изменить пароль</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" onClick={logout} to="/login">Выйти</NavLink>
        </li>
    </Fragment>
);

const guestLinks = (
    <Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="login">Войти</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="register">Зарегистрироваться</NavLink>
        </li>
    </Fragment>
);


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top nav ">
            <div className="container-fluid">
                <Link className="navbar-brand" exact to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-ubuntu" viewBox="0 0 16 16">
                        <path
                            d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/>
                    </svg></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="home">Об авторах</NavLink>
                        </li>
                        { isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </nav>






        // <div>
        //     <div style={{fontSize: "3rem"}}>{cash}</div>
        //     <button onClick={() => addCash()}>Пополнить счет</button>
        //     <button onClick={() => getCash()}>Снять со счета</button>
        //     <ul>
        //         Navbar
        //         <li>
        //             <Link to={'/home'}>Go to Home</Link>
        //         </li>
        //         <li>
        //             <Link to={'/'}>Log In</Link>
        //         </li>
        //         <li>
        //             <Link to={'/reset-password'}>Reset Password</Link>
        //         </li>
        //         <li>
        //             <Link to={'/signup'}>Sign Up</Link>
        //         </li>
        //
        //
        //     </ul>
        // </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);