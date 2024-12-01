import React, { useState } from 'react';
import usersService from '../../services/users';

function UserForm({ fetchUsers }) {

  // State for form inputs
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    // Prevent page reload on form submission
    e.preventDefault(); 

    const userData = { first_name, last_name, email };

    try {
      const user = await usersService.create(userData)
      if (user) {
        setMessage(`User created successfully: ${user.email}`);
        await fetchUsers()
      } else {
        setMessage(`Error: ${user.error || 'User creation failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: Could not create user');
    }
  };

  return (
    <div className="user-form column red-border">
      <div>
        <h2>Create User</h2>
      </div>
      <form onSubmit={handleSubmit} className="column user-form-fields">
        <div className="form-field">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          />
        </div>
        <div>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UserForm;
