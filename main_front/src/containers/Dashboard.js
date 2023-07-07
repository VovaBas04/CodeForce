import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Cookies from "js-cookie";
import './Dashboard.css'

// export const config = {
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             "Access-Control-Allow-Origin": "*",
//             'X-CSRFToken': Cookies.get('csrftoken'),
//             'Vary':'Accept'
//         }
//     };
const Dashboard = () => {


    const [Data,SetData]=useState([])
    useEffect(()=>{axios.get(`${process.env.REACT_APP_API_URL}/profile/tasks`).then((response)=>{
        SetData(response.data);
    })},[])
    return(
        <div className="container bg-grey">
            <h1 className="pt-5 pb-5 text-center">Список задач</h1>
            <div className="row row-cols-md-4 g-5">
                {Data.map( p => (
                    <div className="col">
                        <div className="card">
                            <div className="card-img-container">
                                <img src={p.image}  className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.task}</p>
                                <NavLink className="btn btn-primary" to={`/task/${p.id}` }  props={p}>Check</NavLink>
                                {/*{pathname:`/profile/tasks/${p.id}`}*/}
                            </div>
                        </div>
                    </div>

                    ))}

            </div>

            {/*<ul>*/}
            {/*{Data.map( p => (*/}
            {/*<li>   </li>*/}
            {/*))}*/}
            {/*</ul>*/}
        </div>
    )

};

export default Dashboard