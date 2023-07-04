import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from "./hocs/Layout";

import StartPage from './containers/StartPage'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

import LogPage from './containers/LogPage';



import ResetPassword from './containers/ResetPassword'
import Signup from './containers/Signup'
import Notfound from './containers/Notfound'

import { Provider} from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route index element={<StartPage/>}></Route>
                      <Route path='register' element={<Register/>}></Route>
                      <Route path='login' element={<LogPage/>}></Route>
                      <Route path='dashboard' element={<Dashboard/>}></Route>


                      <Route path='home' element={<Home/>}></Route>
                      <Route path='reset-password' element={<ResetPassword/>}></Route>
                      <Route path='signup' element={<Signup/>}></Route>
                      <Route path='*' element={<Notfound/>}></Route>
                  </Route>
              </Routes>
          </BrowserRouter>
        </Provider>

    )
};

export default App;
