import React, { useState, useEffect } from 'react';
import usersService from '../../services/users';
import UserForm from './createUsersForm';

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
    <div>
      {/* TODO: add some type of dropdown for user form... */}
      <UserForm fetchUsers={fetchUsers}/>

      {/* TODO: turn into its own component */}
      <ul>
          {users.length > 0 ? (
            users.map((user, index) => (
              <li key={index}>
                <div>
                  {user.first_name} {user.last_name} {user.email}
                </div>
                <button onClick={() => deleteUser(user.id)}></button>
              </li> // Adjust based on actual user object structure
            ))
          ) : (
            <p>No users available</p>
          )}
      </ul> 
    </div>
  );
}

export default Users;
