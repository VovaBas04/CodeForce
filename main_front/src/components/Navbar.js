import {React, Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { connect} from "react-redux";
import {logout} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";
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
            <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
        </li>
        <li className="nav-item">
            <a className="nav-link" onClick={logout} href="">Logout</a>
        </li>
    </Fragment>
);

const guestLinks = (
    <Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="login">Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="register">Register</NavLink>
        </li>
    </Fragment>
);


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" exact to="/">Session Auth</Link>
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
                            <NavLink className="nav-link" exact to="home">Home</NavLink>
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