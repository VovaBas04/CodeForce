import logo from './logo.svg';
import './App.css';
import LogPage from './containers/Login/LogPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home'
import ResetPassword from './containers/ResetPassword'
import Signup from './containers/Signup'
import Notfound from './containers/Notfound'

import Layout from "./hocs/Layout";
function App() {
  return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route index element={<LogPage/>}></Route>
                      <Route path='home' element={<Home/>}></Route>
                      <Route path='reset-password' element={<ResetPassword/>}></Route>
                      <Route path='signup' element={<Signup/>}></Route>
                      <Route path='*' element={<Notfound/>}></Route>
                  </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
