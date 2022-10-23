import React, { useState } from "react";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import SuccessfulRegistration from "./Screens/SuccessfulRegistration";

const Login = (props) => {
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
        {screen === "Login" && (
          <p className="text-center">
            Not a user?{" "}
            <a
              className="link-primary"
              onClick={handleScreenChange}
              id="Register"
              href="#login"
            >
              Register
            </a>
          </p>
        )}
        {screen === "Register" && <RegisterScreen setScreen={setScreen} />}
        {screen === "Register" && (
          <p className="text-center">
            Existing user?{" "}
            <a
              className="link-primary"
              onClick={handleScreenChange}
              id="Login"
              href="#registration"
            >
              Login
            </a>
          </p>
        )}
        {screen === "Successful" && <SuccessfulRegistration />}
        {screen === "Successful" && (
          <p className="text-center">
            Proceed to login?{" "}
            <a
              className="link-primary"
              onClick={handleScreenChange}
              id="Login"
              href="#registration-success"
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
