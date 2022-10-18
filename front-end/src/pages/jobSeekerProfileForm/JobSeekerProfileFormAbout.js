import React from "react";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormAbout = (props) => {
  function goToSkills() {
    props.setCurrentPage("Skills");
  }

  return (
    <section className="container-md" id="jobSeekerProfileForm-AboutSection">
      <form id="jobSeekerProfileForm-About">
        <div className="row m-5">
          <div className="col-md-8">
            {/*<----------------------------- name ----------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="name">
                Full Name
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="name"
                  type="text"
                  placeholder={"e.g Tan Li Choon"}
                  required
                ></input>
              </div>
            </div>
            {/*<------------------------- aspiration ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="aspiration">
                Aspiration
              </label>
              <input
                className="form-control p-3"
                id="aspiration"
                type="text"
                placeholder={"e.g Librarian"}
              ></input>
            </div>
            {/*<----------------------- brand statement ----------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="personal-brand">
                Personal Brand Statement
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="personal-brand"
                style={{ height: 200 }}
                placeholder={"Enter here"}
              ></textarea>
              <small className="text-muted">200 / 200 characters left</small>
            </div>
            {/*<--------------------------- email --------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="email">
                Contact Email
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="email"
                  type="email"
                  placeholder="e.g. tanlichoon@gmail.com"
                ></input>
              </div>
            </div>
            {/*<--------------------------- phone --------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="contact-num">
                Contact Number
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="contact-num"
                  type="text"
                  placeholder="e.g. +65 9273 2719"
                ></input>
              </div>
            </div>
          </div>
          {/*<-------------------------- empty col -------------------------->*/}
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
                    style={{ width: "10%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  10% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToSkills}
            className={`${styles.bottom_button} p-3`}
          >
            Proceed to Skills Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormAbout;
