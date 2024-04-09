import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "./UserAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Modal, Button } from "react-bootstrap";

const AddOrUpdateUser = ({ show, closeModal, userId }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const updatedUser = users.filter((user) => user.id === parseInt(userId))[0];
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    updatedUser || { firstName: "", lastName: "" }
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatedUser) {
      dispatch(updateUser(updatedUser.id, formData));
    } else {
      const idForData = updatedUser ? id : users.length + 1;
      dispatch(addUser(idForData, formData.firstName, formData.lastName));
    }
    closeModal();
    navigate("/home");
  };
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{updatedUser ? "Update" : "Add"} User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:"10px"}}>
            {/* <h2>{updatedUser ? "Update" : "Add"} User</h2> */}
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={updatedUser ? updatedUser.firstName : "First Name"}
              required
            />
          </div>
          <div style={{marginBottom:"20px"}}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={updatedUser ? updatedUser.lastName : "Last Name"}
              required
            />
          </div>
          <button
            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4"
            type="submit"
            style={{marginRight:"10px"}}
          >
            {updatedUser ? "Update" : "Create"}
          </button>
          <button
            class="btn btn-danger btn-block fa-lg gradient-custom-2 mb-4"
            onClick={() => {
              closeModal();
              navigate("/home");
            }}
          >
            Cancel
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Title>Haulmatic Technologies</Modal.Title>
      </Modal.Footer>
    </Modal>
  );
};
export default AddOrUpdateUser;
