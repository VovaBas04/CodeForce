import {Link, useNavigate} from "react-router-dom";
import React from "react";
import './StartPage.css'
import {connect} from "react-redux";
const StartPage = ({isAuthenticated}) =>{
    // const navigate = useNavigate()
    // if (isAuthenticated)
    //     return navigate("/dashboard");

    return(
        <div className='container'>
          <div className='mt-5 p-5 bg-dark-subtle'>
              <h1 className='display-4'>Добро пожаловать!</h1>
              <p className='lead'>
                  У вас всё получится
              </p>
              <hr className='my-4'/>
              <p>Нажмите на кнопку ниже чтобы войти</p>
              <Link className='btn btn-lg' to='/login'>Войти</Link>
          </div>
      </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(StartPage);
