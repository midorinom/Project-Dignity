import React from "react";

const LoginScreen = () => {
  return (
    <div>
      <div className="form-outline m-4 row">
        <input type="text" className="form-control" placeholder="Username" />
      </div>

      <div className="form-outline m-4 row">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <div className="row dflex justify-content-center m-4">
        <button className="btn btn-warning w-25">Submit</button>
      </div>
    </div>
  );
};

export default LoginScreen;
