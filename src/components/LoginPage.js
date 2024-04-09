import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username, password } });
    navigate("/home");
  };

  return (
    <div >
      <section class="h-500 gradient-form" style={{ backgroundColor: "#eee",height:"100%" }}>
        <div class="container py-5 h-500">
          <div class="row d-flex justify-content-center align-items-center h-500">
            <div class="col-xl-6">
              <div class="card rounded-3 text-black">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    {" "}
                    <h2>Login Page</h2>
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label">Username:</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label class="form-label">Password:</label>
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="text-center pt-1 mb-5 pb-1 "> <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4" style={{width:"100%",marginTop:"20px"}} onClick={handleLogin}>Login</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
