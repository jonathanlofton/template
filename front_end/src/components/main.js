import React from 'react';
import Users from './users/users';
import UserList from './users/userList';
import { Routes, Route } from "react-router";
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className='header red-border'>
        {/* TODO: turn into image in top left hand corner of header... */}
        <button onClick={() => navigate('/')}>Home</button>
        HEADER
      </div>
      <div className='body red-border'>
        {/* TODO: Move routes to a seperate element... */}
        <Routes>
          <Route path="/" element={<Users/>}></Route>
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
