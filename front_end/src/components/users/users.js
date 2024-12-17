import React, { useState, useEffect } from 'react';
import usersService from '../../services/users';
import UserForm from './createUsersForm';
import {APP} from '../../constants/constants';
import appLogo from '../../images/pngtree-streamer-fly-wooly-bugger.png'

const Users = () => {
  const [users, setUsers] = useState([]); // Default is an empty array

  // TODO: do I want to use classes and 
  // constructor() {
  //   super();
  //   this.state = {
  //     items: [1, 2, 3, 4, 5],
  //   };
  // }

  const fetchUsers = async () => {
    // let users = await usersService.get()
    // setUsers(users)
  }

  useEffect(() => {fetchUsers()}, []);

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
        <UserForm fetchUsers={fetchUsers}/>
      </div>
    </div>
  );
}

export default Users;
