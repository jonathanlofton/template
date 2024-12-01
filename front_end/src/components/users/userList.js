import React, { useState, useEffect } from 'react';
import usersService from '../../services/users';

const UserList = () => {
  const [users, setUsers] = useState([]); // Default is an empty array

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
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <div>
                {/* photo */}
              </div>
              <div>name: {user.first_name} {user.last_name}</div> 
              <div>email: {user.email}</div>
              <button className="btn btn-primary" onClick={() => deleteUser(user.id)}>Delete User</button>
            </div> 
          ))
        ) : (
          <p>No users available</p>
        )}
    </div> 
  );
}

export default UserList;
