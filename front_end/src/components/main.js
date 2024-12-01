import React from 'react';
import Users from './users/users';
import UserList from './users/userList';
import { Routes, Route } from "react-router";

const Main = () => {
  return (
    <div className="yup">
      <div className='header red-border'>
        HEADER
      </div>
      <div className='body align-items-center red-border'>
        {/* TODO: Move routes to a seperate element... */}
        <Routes>
          <Route path="/" element={<Users/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
        </Routes>
        
      </div>
      <div className='footer red-border'>
        FOOTER
      </div>
    </div>
  );
}

export default Main;
