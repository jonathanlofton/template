import React, { useState, useEffect } from 'react';
import usersService from '../../services/users';
import UserForm from './createUsersForm';

// TODO: add this somewhere where you are configuring env variables... constants?
const COMPANY = 'JONS SHOP';

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
    let users = await usersService.get()
    setUsers(users)
  }

  useEffect(() => {fetchUsers()}, []);
  
  const deleteUser = async (userIdToDestroy) => {
    await usersService.destroy(userIdToDestroy)
    fetchUsers()
  }

  return (
    <div >

      <div className="row-space-around-center">
        <div className="create-account-banner red-border">
          {/* THIS IS JUST THE COMPANY NAME HERE THING... */}
          <div>
            <h1>{COMPANY}</h1>
          </div>
          <div>
            <h2>Create {COMPANY} Account</h2>
          </div>
        </div>

        {/* TODO: add some type of dropdown for user form... */}
        <UserForm fetchUsers={fetchUsers}/>
      </div>

      

      {/* TODO: turn into its own component */}
      <div>
          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={index}>
                <div className="row">
                  <div>
                    {/* photo */}
                  </div>
                  <div className="column">
                    <div>name: {user.first_name} {user.last_name}</div> 
                    <div>email: {user.email}</div>
                  </div>
                  <button onClick={() => deleteUser(user.id)}></button>
                </div>
              </div> 
            ))
          ) : (
            <p>No users available</p>
          )}
      </div> 
      
    </div>
  );
}

export default Users;
