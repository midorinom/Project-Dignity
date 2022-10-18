import React, { useState } from "react";
import styles from "./jobSeekerProfileForm.module.css";
import JobSeekerNewEducation from "./JobSeekerNewEducation";

const JobSeekerProfileFormEducation = () => {
  const [addNewEducation, setAddNewEducation] = useState([
    <JobSeekerNewEducation key={0} />,
  ]);

  const handleAddEducation = (e) => {
    e.preventDefault();
    setAddNewEducation([
      ...addNewEducation,
      <JobSeekerNewEducation key={addNewEducation.length} />,
    ]);
  };
  return (
    <section
      className="container-md"
      id="jobSeekerProfileForm-EducationSection"
    >
      <form id="jobSeekerProfileForm-Education">
        <div className="row m-5">
          <div className="col-md-8">
            {addNewEducation}
            {/*<-------------------- add new education -------------------->*/}
            {/* TODO: on click will show another set of this form below */}
            <div className="form-group mb-4">
              <button
                className={styles.circle_btn}
                onClick={handleAddEducation}
                id="add-new-edu"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
              <label className="form-label" htmlFor="add-new-edu">
                Add Another Education Qualification
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
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  90% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<------------------------- complete btn ------------------------->*/}
        <div className="row justify-content-center m-5">
          <button className={`${styles.bottom_button} p-3`} type="submit">
            Complete Profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormEducation;
