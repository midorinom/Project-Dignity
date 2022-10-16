import React from "react";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormSkills = () => {
  return (
    <section className="container-md" id="jobSeekerProfileForm-SkillsSection">
      <form id="jobSeekerProfileForm-Skills">
        <div className="row m-5">
          <div className="col-md-8">
            {/*<-------------------------- skill set -------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="skillset">
                Skillset
              </label>
              <input
                className="form-control mb-2 p-3"
                id="skillset"
                type="text"
                placeholder={"e.g Digital Marketing"}
              ></input>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault-skills"
                ></input>
                <label
                  className="form-check-label text-muted"
                  htmlFor="flexCheckDefault-skills"
                >
                  I have accreditation for this skill
                </label>
              </div>
            </div>
            {/*<------------------------ certification ------------------------>*/}
            {/* to show when accreditation checked */}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="cert-name">
                Name of Supporting Certificate / License (Optional)
              </label>
              <input
                className="form-control p-3"
                id="cert-name"
                type="text"
                placeholder={"e.g Google Certificate for Digital Marketing"}
              ></input>
            </div>
            {/*<-------------------- issuing organisation -------------------->*/}
            {/* to show when accreditation checked */}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="issuing-org">
                Issuing Organisation (Optional)
              </label>
              <input
                className="form-control p-3"
                id="issuing-org"
                type="text"
                placeholder="e.g. Google"
              ></input>
            </div>
            {/*<-------------------- issuing date -------------------->*/}
            {/* to show when accreditation checked */}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="issue-date-cert">
                Issue Date (Optional)
              </label>
              <input
                className="form-control p-3"
                id="issue-date-cert"
                type="date"
              ></input>
            </div>
            {/*<-------------------- add new skill -------------------->*/}
            {/* TODO: on click will show another set of this form below */}
            <div className="form-group mb-4">
              <button className={styles.circle_btn} id="add-new-skill">
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
                <div class={`${styles.progress} progress mb-1`}>
                  <div
                    class={styles.progress_bar}
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
          <button className={`${styles.bottom_button} p-3`}>
            Proceed to Ability Differences Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormSkills;
