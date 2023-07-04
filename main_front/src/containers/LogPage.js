import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
const LogPage = () => {


     const [data, setData] = useState({});

     const [persons, setPersons] = useState({});

     const [token, setToken] = useState('');



     const handleSubmit = (event) => {
         event.preventDefault();
         const formData = new FormData(event.target);
         // console.log(formData.get('username'));
         axios.post('http://127.0.0.1:8000/auth/token/login/', formData)
             .then((response) => {
                setToken(response.data['auth_token']);
                 // axios.get('http://127.0.0.1:8000/home',{'headers':{'Authorization':'Token '+response.data['auth_token']}})
                 //     .then((res)=>{
                 //         setData(res.data)
                 //        console.log(res.data)
                 //     });
                 console.log(response.data);
                    // console.log(data);
             });
     };

  return (







      <div className='logging'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            {/*<input type="email" name="field2" />*/}
            <input type="password" name="password" />
            <Link to='home' >
            <button type="submit">Submit</button>
            </Link>
        </form>
      </div>
  );
}

export default LogPage
