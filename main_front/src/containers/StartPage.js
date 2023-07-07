import {Link} from "react-router-dom";
import React from "react";
import './StartPage.css'
const StartPage = () =>{
    return(
        <div className='container'>
          <div className='mt-5 p-5 bg-dark-subtle'>
              <h1 className='display-4'>Добро пожаловать!</h1>
              <p className='lead'>
                  У тебя всё получится
              </p>
              <hr className='my-4'/>
              <p>Нажми на кнопку ниже чтобы войти</p>
              <Link className='btn btn-lg' to='/login'>Войти</Link>
          </div>
      </div>
    )
};

export default StartPage;
