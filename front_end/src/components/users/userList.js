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
    <div className="users-list red-border">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <div>
                {/* photo */}
              </div>
              <div>
                <b>name:</b> {user.first_name} {user.last_name}
              </div>
              <div>
                <b>email:</b> {user.email}
              </div>
              <div>
                <b>created at:</b> {new Date(user.createdAt).toLocaleString()}
              </div>
              <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete User</button>
            </div> 
          ))
        ) : (
          <p>No users available</p>
        )}
    </div> 
  );
}

export default UserList;
