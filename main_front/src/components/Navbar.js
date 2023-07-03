import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) =>(
        <div>
            <ul>
                    Navbar
                <li>
                    <Link to={'/home'}>Go to Home</Link>
                </li>
                <li>
                    <Link to={'/'}>Log In</Link>
                </li>
                <li>
                    <Link to={'/reset-password'}>Reset Password</Link>
                </li>
                <li>
                    <Link to={'/signup'}>Sign Up</Link>
                </li>




            </ul>
        </div>
);

export default Navbar;