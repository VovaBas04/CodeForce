import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom";
import './Layout.css'

const Layout = (props) =>{
    return (
        <div>
            <header className='header'>
            <Navbar/>
            {props.children}
        </header>
        <main className='main'>
            <Outlet/>
        </main>
        <footer className='footer'>
            2023
        </footer>
        </div>

    )
};

export default Layout;