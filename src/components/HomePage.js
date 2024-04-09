import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList";
import NavBar from "./NavBar";
import AddOrUpdateUser from "./AddOrUpdateUser";

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const closeModal = () => {
    setShowModal(false);
    setUserId(null);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const handleUpdate = (id) => {
    setUserId(id);
  };

  return (
    <div>
      {showModal && (
        <AddOrUpdateUser
          show={showModal}
          closeModal={closeModal}
          userId={userId}
        />
      )}
      {isAuthenticated ? (
        <div>
          <NavBar />
          <h3>Welcome, {username}!</h3>
          <button
            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4"
            onClick={openModal}
          >
            Add User
          </button>

          <UserList
            openModal={openModal}
            closeModal={closeModal}
            handleUpdate={handleUpdate}
          />
        </div>
      ) : (
        <div>
          <p>Please login to view this page.</p>
          <button onClick={() => navigate("/")}>Login</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
