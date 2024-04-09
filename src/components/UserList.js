// src/components/UserList.js
import React from 'react';
import { useSelector } from 'react-redux';
import {deleteUser} from './UserAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
           {user.id} {user.firstName} {user.lastName} <button onClick={()=>{navigate(`/update/${user.id}`)}}>Update</button> <button onClick={()=>{dispatch(deleteUser(user.id));}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
