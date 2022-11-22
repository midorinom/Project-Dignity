import React, { useContext, useState } from "react";
import UserContext from "../../../context/userContext";

const LoginScreen = () => {
  const [user, setUser] = useState({});
  const userCtx = useContext(UserContext);

  const handleUsername = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleLogin = (e) => {
    if (user.username && user.password) {
      return postLogin();
    } else {
      alert("Missing username/password input");
    }
  };
  async function postLogin(
    url = "https://project-dignity-backend.onrender.com/api/users/login",
    data = user
  ) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jResponse = await response.json();
    if (jResponse.message || !jResponse) {
      alert(`Invalid username/password: ${jResponse.message}`);
    } else {
      userCtx.setUserDetails({ ...jResponse });
    }
    return jResponse;
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

      <div className="row dflex justify-content-center m-4">
        <button className="btn btn-warning w-25" onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
