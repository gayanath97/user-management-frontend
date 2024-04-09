import React from "react";
import { useSelector } from "react-redux";
import { deleteUser } from "./UserAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = ({openModal,closeModal,handleUpdate}) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h3>User List</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button
                class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4"
                  onClick={()=>{openModal();handleUpdate(user.id);}}
                >
                  Update
                </button>{" "}
                <button
                class="btn btn-danger btn-block fa-lg gradient-custom-2 mb-4"
                  onClick={() => {
                    dispatch(deleteUser(user.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
