import logo from './logo.svg';
import './App.css';
import LogPage from './containers/Login/LogPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './containers/Home'
import ResetPassword from './containers/ResetPassword'
import Signup from './containers/Signup'

import Layout from "./hocs/Layout";
function App() {
  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path='/' element={<LogPage/>}></Route>
                  <Route path='/home' element={<Home/>}></Route>
                  <Route path='/resetpassword' element={<ResetPassword/>}></Route>
                  <Route path='/signup' element={<Signup/>}></Route>
              </Routes>
          </Layout>
      </Router>
  );
}

export default App;
