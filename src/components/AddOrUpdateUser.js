import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addUser,updateUser} from './UserAction';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AddOrUpdateUser = () => {
    const { id } = useParams();
    const users = useSelector(state => state.users);
    const updatedUser = users.filter(user => user.id === parseInt(id))[0];
    const dispatch = useDispatch();
  const [formData, setFormData] = useState(updatedUser || { firstName: '', lastName: '' });
  const navigate = useNavigate();
  

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (updatedUser) {
      dispatch(updateUser(updatedUser.id, formData));
    } else {
      const idForData = updatedUser ? id : users.length + 1;
      dispatch(addUser(idForData,formData.firstName, formData.lastName));
      
    }
    navigate('/home')
  };
    return (
        <form onSubmit={handleSubmit}>
           <div>
            <h2>{updatedUser ? 'Update' : 'Add'} User</h2>
           <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder={updatedUser?updatedUser.firstName:"First Name"}
        required
      />
           </div>
        <div>
        <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder={updatedUser?updatedUser.lastName:"Last Name"}
        required
      />
        </div>
      <button type="submit">{updatedUser ? 'Update' : 'Create'}</button>
      <button onClick={()=>{navigate('/home')}}>Cancel</button>
    </form>
    );
}
export default AddOrUpdateUser;