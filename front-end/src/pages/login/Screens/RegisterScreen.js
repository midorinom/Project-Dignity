import React from "react";

const RegisterScreen = () => {
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

      <div className="row dflex justify-content-center">
        <div
          className="col-4 p-0 m-0 btn-group"
          role="group"
          aria-label="jobseeker/employer role select"
        >
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="jobseeker"
            autocomplete="off"
            checked
          />
          <label
            className="btn btn-outline-secondary btn-sm rounded"
            for="jobseeker"
          >
            Jobseeker
          </label>
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="employer"
            autocomplete="off"
          />
          <label
            className="btn btn-outline-secondary btn-sm rounded"
            for="employer"
          >
            Employer
          </label>
          <br />
        </div>
      </div>

      <div className="row dflex justify-content-center m-4">
        <button className="btn btn-warning w-25">Register</button>
      </div>
    </div>
  );
};

export default RegisterScreen;
