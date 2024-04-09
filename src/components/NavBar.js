import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
      };
return(
    <nav class="navbar navbar-dark bg-primary justify-content-between">
  <a class="navbar-brand">Home Page</a>
  <form class="form-inline">
    <button  onClick={handleLogout} class="btn btn-outline-warning my-2 my-sm-0" style={{marginRight:"20px"}} type="submit">Logout</button>
  </form>
</nav>
)
}
export default NavBar;