import React from 'react';
import LoginPage from './loginPage';
import UserList from './users/userList';
import HomePage from './home';
import { Routes, Route } from "react-router";
import { useNavigate } from 'react-router-dom';
import {APP} from '../constants/constants';
import appLogo from '../images/app-logo.png'

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className='header red-border'>
        {/* TODO: turn into image in top left hand corner of header... */}
        <img onClick={() => navigate('/login')} className="home-button-image" src={appLogo} alt={APP.NAME + " image"}></img>
        HEADER
        {/* TODO: make logout only available if their is an active session */}
        <p className="float-right margin-15px">
          Logout
        </p>
      </div>
      <div className='body red-border'>
        {/* TODO: Move routes to a seperate element... */}
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
          <Route path="/" element={<HomePage/>}></Route>
        </Routes>
      </div>
      <div className='footer red-border'>
        {/* Add documentation... links to external things... */}
        FOOTER
      </div>
    </div>
  );
}

export default Main;
