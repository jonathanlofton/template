import React, { } from 'react';
import UserForm from './users/createUsersForm';
import {APP} from '../constants/constants';
import appLogo from '../images/app-logo.png'

const LoginPage = () => {

  return (
    <div className="create-user-page red-border">
      <div className="row-space-around-center">
        <div className="create-account-banner red-border">
          <div>
            <div>
              <img className="create-user-banner-logo" src={appLogo} alt={APP.NAME + " image"}></img>
            </div>
            <h1><b>{APP.NAME}</b></h1>
          </div>
          <div>
            <h2>Create a "{APP.NAME}"" Account</h2>
          </div>
        </div>

        {/* TODO: add some type of dropdown for user form... */}
        <UserForm />
      </div>
    </div>
  );
}

export default LoginPage;
