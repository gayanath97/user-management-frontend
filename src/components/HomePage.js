// src/components/HomePage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserList from './UserList';

const HomePage = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const username = useSelector(state => state.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <div>
      <h2>Home Page </h2>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={()=>{navigate('/add')}}>Add User</button>
          <UserList />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
        <p>Please login to view this page.</p>
        <button onClick={() => 
        navigate('/')
}>Login
</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
