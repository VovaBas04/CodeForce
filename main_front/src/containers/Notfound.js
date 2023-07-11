import React from 'react'
import './Notfound.css'
import {NavLink} from "react-router-dom";
const Notfound = (props) => {
    return (
        <div className="container">
            <header>
                <h1 id ="ERROR" className="pt-5 pb-5 text-center">ERROR 404 NOT FOUND</h1>
            </header>
            <body className="pt-5 pb-5 text-center">
                <img src="../../../media/images/sonic-x-sonic.gif" className="" alt="Sonic lol"/>
                <p id="Sans" className="pt-2">OOPSIE-DOOPSIE THIS PAGE WAS NOT FOUND :(</p>
            </body>
            <footer  className="pt-5 pb-5 text-center">
                <p id="Report_me">Сообщите об ошибке</p>
                <NavLink className="btn btn-danger gap-2 col-6 mx-auto" to= "https://vk.com/id161900910">Report</NavLink>
            </footer>
        </div>

    )
};

export default Notfound;