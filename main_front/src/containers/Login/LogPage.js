import './LogPage.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const LogPage = () => {


     const [data, setData] = useState({});

     const [persons, setPersons] = useState({});




     const handleSubmit = (event) => {
         event.preventDefault();
         const formData = new FormData(event.target);
         // console.log(formData.get('username'));
         axios.post('http://127.0.0.1:8000/auth/token/login/', formData)
             .then((response) => {

                 axios.get('http://127.0.0.1:8000/auth/users/me/',{'headers':{'Authorization':'Token '+response.data['auth_token']}})
                     .then((res)=>{
                         setData(res.data)
                        console.log(res.data)
                     });
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
            <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default LogPage