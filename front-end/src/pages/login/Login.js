import React, { useState } from "react";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

const Login = () => {
  const [screen, setScreen] = useState("Login");
  const handleScreenChange = (e) => {
    setScreen(e.target.id);
  };
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="d-flex flex-column border border-fade rounded m-4 w-50">
        <h1 className="text-center mt-4 mb-0">{screen}</h1>
        <div></div>
        {screen === "Login" && <LoginScreen />}
        {screen === "Register" && <RegisterScreen />}
        {screen === "Login" ? (
          <p className="text-center">
            Not a user?{" "}
            <a
              className="link-primary"
              onClick={handleScreenChange}
              id="Register"
              href="#"
            >
              Register
            </a>
          </p>
        ) : (
          <p className="text-center">
            Existing user?{" "}
            <a
              className="link-primary"
              onClick={handleScreenChange}
              id="Login"
              href="#"
            >
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
