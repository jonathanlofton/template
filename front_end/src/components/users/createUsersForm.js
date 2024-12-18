import React, { useState } from 'react';
import { createUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';

function UserForm() {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const userData = { first_name, last_name, email };

    try {
      const user = await createUser(userData)
      if (user) {
        setMessage(`User created successfully: ${user.email}`);
        navigate('/users')
      } else {
        setMessage(`Error: ${user.error || 'User creation failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage(`Error: Could not create user | message: ${error.message}`);
    }
  };

  const handleGoogleLogin = () => {
    // Redirect to backend Google auth route
    window.location.href = 'http://localhost:3000/auth/google';
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
        <button type="submit" onClick={handleGoogleLogin} className="btn btn-primary">Sign in with Google</button>
      </form>
      {
        message && 
        <div class="alert alert-primary" role="alert">
          <p>{message}</p>
        </div>
      }
    </div>
  );
}

export default UserForm;
