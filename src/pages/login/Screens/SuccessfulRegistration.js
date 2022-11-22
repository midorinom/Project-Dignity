import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutline";

const SuccessfulRegistration = () => {
  return (
    <div>
      <h1 className="text-center">Registration!</h1>
      <div
        className="d-flex justify-content-center m-5"
        style={{ transform: "scale(3)", color: "green" }}
      >
        <CheckCircleOutlinedIcon />
      </div>
    </div>
  );
};

export default SuccessfulRegistration;
