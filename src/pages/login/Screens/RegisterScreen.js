import React, { useState } from "react";

const RegisterScreen = (props) => {
  const [registerUser, setRegisterUser] = useState({});

  const handleUsername = (e) => {
    setRegisterUser({ ...registerUser, username: e.target.value });
  };
  const handlePassword = (e) => {
    setRegisterUser({ ...registerUser, password: e.target.value });
  };
  const handleUserType = (e) => {
    setRegisterUser({ ...registerUser, type: e.target.id });
  };

  const handleRegister = (e) => {
    if (registerUser.username && registerUser.password && registerUser.type) {
      return putAccount();
    } else {
      alert("Missing username / password / user type input");
    }
  };

  async function putAccount(
    url = "https://project-dignity-backend.onrender.com/api/users/create",
    data = registerUser
  ) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    props.setScreen("Successful");
    return response.json();
  }

  return (
    <div>
      <div className="form-outline m-4 row">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={handleUsername}
        />
      </div>

      <div className="form-outline m-4 row">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={handlePassword}
        />
      </div>

      <div className="row d-flex justify-content-center">
        <div
          className="col-4 p-0 m-0 btn-group d-flex justify-content-center"
          role="group"
          aria-label="jobseeker/employer role select"
        >
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="jobSeeker"
            autoComplete="off"
            onClick={handleUserType}
          />
          <label
            className="btn btn-outline-secondary btn-sm rounded mx-1"
            htmlFor="jobSeeker"
          >
            Jobseeker
          </label>
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="employer"
            autoComplete="off"
            onClick={handleUserType}
          />
          <label
            className="btn btn-outline-secondary btn-sm rounded mx-1"
            htmlFor="employer"
          >
            Employer
          </label>
          <br />
        </div>
      </div>

      <div className="row dflex justify-content-center m-4">
        <button className="btn btn-warning w-25" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterScreen;
