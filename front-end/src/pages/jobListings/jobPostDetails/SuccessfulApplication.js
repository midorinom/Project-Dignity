import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

const SuccessfulApplication = () => {
  return (
    <div>
      <h1 className="text-center m-5">Application Received!</h1>
      <div
        className="d-flex justify-content-center m-5"
        style={{ transform: "scale(3)", color: "green" }}
      >
        <CheckCircleOutlinedIcon />
      </div>
      <p className="text-center mt-5">
        Employers will contact successful applicants.
      </p>
      <p className="text-center mb-5">
        View more listings?{" "}
        <Link
          to="/job-listings"
          className="link-primary"
          id="Login"
          href="#registration-success"
        >
          Proceed
        </Link>
      </p>
    </div>
  );
};

export default SuccessfulApplication;
