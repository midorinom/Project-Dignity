import React, { useState } from "react";
import styles from "./jobSeekerProfileForm.module.css";
import JobSeekerNewExperience from "./JobSeekerNewExperience";

const JobSeekerProfileFormExperience = () => {
  const [addNewExperience, setAddNewExperience] = useState([
    <JobSeekerNewExperience key={0} />,
  ]);

  const handleAddExperience = (e) => {
    e.preventDefault();
    setAddNewExperience([
      ...addNewExperience,
      <JobSeekerNewExperience key={addNewExperience.length} />,
    ]);
  };

  return (
    <section
      className="container-md"
      id="jobSeekerProfileForm-ExperienceSection"
    >
      <form id="jobSeekerProfileForm-Experience">
        <div className="row m-5">
          <div className="col-md-8">
            {addNewExperience}
            {/*<-------------------- add new experience -------------------->*/}
            <div className="form-group mb-4">
              <button
                className={styles.circle_btn}
                onClick={handleAddExperience}
                id="add-new-skill"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
              <label className="form-label" htmlFor="add-new-skill">
                Add Another Experience
              </label>
            </div>
          </div>
          {/* <------------------------ empty col -------------------------> */}
          <div className="col-md-1"></div>
          {/* <------------------------ side panel ------------------------> */}
          <div className="col-md-3">
            <div className=" sidePanel row mt-5">
              <button className={`${styles.side_buttons} mt-3 mb-4 p-3`}>
                Save Changes
              </button>
              <button className={`${styles.side_buttons} mb-4 p-3`}>
                Cancel
              </button>
              {/* <--------------------- progress bar ---------------------> */}
              <div className="form-group">
                <div className={`${styles.progress} progress mb-1`}>
                  <div
                    className={styles.progress_bar}
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  75% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button className={`${styles.bottom_button} p-3`}>
            Proceed to Education Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormExperience;
