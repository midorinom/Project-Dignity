import React, { useState } from "react";
import JobSeekerNewSkill from "./JobSeekerNewSkill";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormSkills = (props) => {
  const [addNewSkill, setAddNewSkill] = useState([
    <JobSeekerNewSkill key={0} />,
  ]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    setAddNewSkill([
      ...addNewSkill,
      <JobSeekerNewSkill key={addNewSkill.length} />,
    ]);
  };

  function goToAbilityDiff() {
    props.setCurrentPage("Ability Differences");
  }

  return (
    <section className="container-md" id="jobSeekerProfileForm-SkillsSection">
      <form id="jobSeekerProfileForm-Skills">
        <div className="row m-5">
          <div className="col-md-8">
            {addNewSkill}
            {/*<-------------------- add new skill -------------------->*/}
            {/* TODO: on click will show another set of this form below */}
            <div className="form-group mb-4">
              <button
                className={styles.circle_btn}
                onClick={handleAddSkill}
                id="add-new-skill"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
              <label className="form-label" htmlFor="add-new-skill">
                Add new skill
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
                    style={{ width: "20%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  20% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToAbilityDiff}
            className={`${styles.bottom_button} p-3`}
          >
            Proceed to Ability Differences Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormSkills;
