import React from 'react';
import Users from './users/users';

const Main = () => {
  return (
    <div className="yup">
      <div className='header red-border'>
        Hello this is the header
      </div>
      <div className='body red-border'>
        HELLO THIS IS THE BODY
        <Users/>
      </div>
      <div className='footer red-border'>
        Hello this is the footer
      </div>
    </div>
  );
}

export default Main;
