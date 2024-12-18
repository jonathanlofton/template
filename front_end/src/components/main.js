import React from 'react';
import Users from './users/users';
import UserList from './users/userList';
import { Routes, Route } from "react-router";
import { useNavigate } from 'react-router-dom';
import {APP} from '../constants/constants';
import appLogo from '../images/pngtree-streamer-fly-wooly-bugger.png'

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className='header red-border'>
        {/* TODO: turn into image in top left hand corner of header... */}
        <p onClick={() => navigate('/login')}>
          <img className="home-button-image" src={appLogo} alt={APP.NAME + " image"}></img>
        </p>
        HEADER
      </div>
      <div className='body red-border'>
        {/* TODO: Move routes to a seperate element... */}
        <Routes>
          <Route path="/login" element={<Users/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
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
