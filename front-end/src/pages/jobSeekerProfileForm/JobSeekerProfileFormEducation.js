import React from "react";

const JobSeekerProfileFormEducation = () => {
  return (
    <section
      className="container-md"
      id="jobSeekerProfileForm-EducationSection"
    >
      <form id="jobSeekerProfileForm-Education">
        <div className="row m-5">
          <div className="col-md-8">
            {/*<---------------------------- school ---------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="school-name">
                School
              </label>
              <input
                className="form-control p-3"
                id="school-name"
                type="text"
                placeholder={"e.g Dunman Secondary School"}
              ></input>
            </div>
            {/*<-------------------- alt edu qualification -------------------->*/}
            {/* TODO: decide if written or drop down is better */}
            {/* TODO: if drop down create component to loop through a list of options */}
            {/* <div className="form-group mb-4">
              <label className="form-label" htmlFor="qualification">
                Job Type
              </label>
              <select className="form-select p-3" id="qualification">
                <option selected>Select from drop down list</option>
                <option value="1">Baker</option>
                <option value="2">Barista</option>
                <option value="3">Cashier</option>
                <option value="4">Packer</option>
                <option value="5">Waiter</option>
              </select>
            </div> */}
            {/*<---------------------- edu qualification ---------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="qualification">
                Qualification Obtained
              </label>
              <input
                className="form-control p-3"
                id="qualification"
                type="text"
                placeholder="e.g. GCE 'O'Level Certificate"
              ></input>
            </div>
            {/*<------------------------- start date ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="start-date-edu">
                Start Date
              </label>
              <input
                className="form-control p-3"
                id="start-date-edu"
                type="date"
              ></input>
            </div>
            {/*<-------------------------- end date -------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="end-date-edu">
                End Date (Or Expected)
              </label>
              <input
                className="form-control mb-2 p-3"
                id="end-date-edu"
                type="date"
              ></input>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault-edu"
                ></input>
                <label
                  className="form-check-label text-muted"
                  htmlFor="flexCheckDefault-edu"
                >
                  I am currently studying here
                </label>
              </div>
            </div>
            {/*<---------------------- edu description ---------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="edu-description">
                Description (Optional)
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="edu-description"
                style={{ height: 200 }}
                placeholder={"Enter here"}
              ></textarea>
              <small className="text-muted">200 / 200 characters left</small>
            </div>
            {/*<-------------------- add new education -------------------->*/}
            {/* on click will show another set of this form below */}
            <div className="form-group mb-4">
              <button className="circle-btn" id="add-new-edu">
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
          <button className="bottom-button p-3" type="submit">
            Complete Profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormEducation;
