import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
const Dashboard = () => {
    // const config = {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': Cookies.get('csrftoken')
    //     }
    // };

    const [Data,SetData]=useState([])
    useEffect(()=>{axios.get(`${process.env.REACT_APP_API_URL}/profile/tasks`).then((response)=>{
        console.log(response.data)
        SetData(response.data);
    })},[])
    return(
        <div>
            Dashboard
            <ul>
            {Data.map(p=>(
            <li>   <Link to={{pathname:`/profile/tasks/${p.id}/`}}>{p.title}</Link></li>
            ))}
            </ul>
        </div>
    )

};

export default Dashboard