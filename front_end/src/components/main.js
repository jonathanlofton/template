import React from 'react';
import Users from './users/users';

const Main = () => {
  return (
    <div className="yup">
      <div className='header red-border'>
        HEADER
      </div>
      <div className='body align-items-center red-border'>
        {/* TODO: determine routes to display pages... */}
        <Users/>
      </div>
      <div className='footer red-border'>
        FOOTER
      </div>
    </div>
  );
}

export default Main;
