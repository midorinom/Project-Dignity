import React from "react";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import styles from "./manageJobs.module.css";

const ManageJobs = (props) => {
  // Show the current screen depending on which page the user clicked on
  function displayCurrentScreen() {
    if (props.manageJobsCurrentPage === "saved") {
      return <SavedJobs setSelectedJobPost={props.setSelectedJobPost} />;
    } else if (props.manageJobsCurrentPage === "applied") {
      return <AppliedJobs setSelectedJobPost={props.setSelectedJobPost} />;
    }
  }
  const currentScreen = displayCurrentScreen();

  return (
    <div>
      <h1 className="m-4">
        {props.manageJobsCurrentPage === "applied"
          ? "My Applied Jobs"
          : "My Saved Jobs"}
      </h1>
      <div className="w-75 m-auto d-flex justify-content-around">
        <button
          className={`w-25 btn btn-outline-secondary ${
            props.manageJobsCurrentPage === "applied" && styles.appliedBtn
          }`}
          onClick={() => {
            props.setManageJobsCurrentPage("applied");
          }}
        >
          Applied
        </button>
        <button
          className={`w-25 btn btn-outline-secondary ${
            props.manageJobsCurrentPage === "saved" && styles.appliedBtn
          }`}
          onClick={() => {
            props.setManageJobsCurrentPage("saved");
          }}
        >
          Saved
        </button>
      </div>
      {currentScreen}
    </div>
  );
};

export default ManageJobs;
