import React from "react";

const JobSeekerProfileFormExperience = () => {
  return (
    <section
      className="container-md"
      id="jobSeekerProfileForm-ExperienceSection"
    >
      <form id="jobSeekerProfileForm-Experience">
        <div className="row m-5">
          <div className="col-md-8">
            {/*<-------------------------- job title -------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="job-title">
                Job Title
              </label>
              <input
                className="form-control p-3"
                id="job-title"
                type="text"
                placeholder={"e.g Cataloguing Assistant"}
              ></input>
            </div>
            {/*<-------------------------- job type -------------------------->*/}
            {/* TODO: create component to loop through a list of options */}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="job-type">
                Job Type
              </label>
              <select className="form-select p-3" id="job-type">
                <option selected>Select from drop down list</option>
                <option value="1">Baker</option>
                <option value="2">Barista</option>
                <option value="3">Cashier</option>
                <option value="4">Packer</option>
                <option value="5">Waiter</option>
              </select>
            </div>
            {/*<------------------------ company name ------------------------>*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="company-name">
                Company Name
              </label>
              <input
                className="form-control p-3"
                id="company-name"
                type="text"
                placeholder="e.g. Starbucks"
              ></input>
            </div>
            {/*<------------------------- start date ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="start-date-job">
                Start Date
              </label>
              <input
                className="form-control p-3"
                id="start-date-job"
                type="date"
              ></input>
            </div>
            {/*<-------------------------- end date -------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="end-date-job">
                End Date
              </label>
              <input
                className="form-control mb-2 p-3"
                id="end-date-job"
                type="date"
              ></input>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault-experience"
                ></input>
                <label
                  className="form-check-label text-muted"
                  htmlFor="flexCheckDefault-experience"
                >
                  I am currently working here
                </label>
              </div>
            </div>
            {/*<---------------------- job description ---------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="job-description">
                Description
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="job-description"
                style={{ height: 200 }}
                placeholder={"Enter here"}
              ></textarea>
              <small className="text-muted">200 / 200 characters left</small>
            </div>
            {/*<-------------------- add new skill -------------------->*/}
            {/* on click will show another set of this form below */}
            <div className="form-group mb-4">
              <button className="circle-btn" id="add-new-skill">
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
              <button className="side-buttons mt-3 mb-4 p-3">
                Save Changes
              </button>
              <button className="side-buttons mb-4 p-3">Cancel</button>
              {/* <--------------------- progress bar ---------------------> */}
              <div className="form-group">
                <div class="progress mb-1">
                  <div
                    class="progress-bar"
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
          <button className="bottom-button p-3">
            Proceed to Education Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormExperience;
