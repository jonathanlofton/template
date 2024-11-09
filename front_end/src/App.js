import React, { useState } from 'react';
import logo from './logo.svg';
import usersService from './services/users';
import Body from './components/body';
import './App.css';

function App() {
  
  const [users, setUsers] = useState([]); // Default is an empty array
  
  const fetchUsers = async () => {
    let users = await usersService.get()
    debugger;
    setUsers(users)
    debugger;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchUsers}>get users</button>
        
        {/* TODO: turn into its own component */}
           <ul>
            {users.length > 0 ? (
              users.map((user, index) => (
                <li key={index}>{user.first_name} {user.last_name} {user.email}</li> // Adjust based on actual user object structure
              ))
            ) : (
              <p>No users available</p>
            )}
          </ul>
      </header>
      <Body/>
      <footer></footer>
    </div>
  );
}

export default App;
