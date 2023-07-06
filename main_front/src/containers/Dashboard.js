import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";

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
        console.log(response.data)
        SetData(response.data);
    })},[])
    return(
        <div className="container bg-grey">
            <h1 className="p-5">Список задач</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {Data.map( p => (
                    <div className="col">
                        <div className="card">
                            <img src={p.image}  className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.task}</p>
                                    <Link className="btn btn-primary" to={{pathname:`/profile/tasks/${p.id}`}}>Check</Link>
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