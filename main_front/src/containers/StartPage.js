import {Link} from "react-router-dom";
import React from "react";

const StartPage = () =>{
    return(
        <div className='container'>
          <div className='mt-5 p-5 bg-light'>
              <h1 className='display-4'>Welcome to CodeForces!</h1>
              <p className='lead'>
                  Ёбаный рот этого казино, блять
              </p>
              <hr className='my-4'/>
              <p>Нажми на кнопку ниже чтобы зарегаться</p>
              <Link className='btn btn-primary btn-lg' to='/login'>Login</Link>
          </div>
      </div>
    )
};

export default StartPage;
