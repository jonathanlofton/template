import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getSession} from '../services/users';

const HomePage = () => {
  const [session, setUserSession] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const sessionUser = await getSession()
      sessionUser ? setUserSession(sessionUser) : navigate('/login')
    };
    checkSession();
  }, []);  

  return (
    <div>
      THIS IS THE HOME PAGE
      {JSON.stringify(session)}
    </div>
  )
}
export default HomePage;