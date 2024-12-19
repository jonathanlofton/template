import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getAllUsers, removeUser} from '../../services/users';

const UserList = () => {
  const [users, setUsers] = useState([]); // Default is an empty array
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      let res = await getAllUsers()
      if (res.redirectTo) {
        navigate(res.redirectTo)
      } else {
        res.users && res.users.length ? setUsers(res.users) : setUsers([])
      }
    }
    
    fetchUsers()
  }, [navigate]);
  
  const deleteUser = async (userIdToDestroy) => {
    let res = await removeUser(userIdToDestroy)
    if (res.redirectTo) { 
      navigate(res.redirectTo)
    } else {
      let newUsers = users.filter((user) => user.id !== userIdToDestroy)
      setUsers(newUsers);
    }
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
