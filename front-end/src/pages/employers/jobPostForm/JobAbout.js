import React from "react";

const JobAbout = () => {
  return (
    <>
      {/* =====================================================
        FORM ABOUT JOB
        ========================================================= */}
      <section classname="container-md" id="AboutEmployer">
        <form id="AboutEmployer">
          <div className="row m-5 text-start">
            <div className="col-md-8">
              {/*================================== Job Title and Job Type ================================== */}
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="name">
                  Job Title
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="name"
                  placeholder="e.g Assistant Chef"
                />
                <label className="form-label" htmlFor="name">
                  Job Type
                </label>
                <select type="text" class="form-select" id="JobType">
                  <option class="default" selected>
                    Select from the drop down list
                  </option>
                  <option class="quiet">Quiet</option>
                  <option class="medium">Medium</option>
                  <option class="noisy">Noisy</option>
                </select>
              </div>
              {/* ================================================================================================== */}
              {/*======================================Interaction Type ================================== */}
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="Job Interaction Type">
                  Job Interaction Type
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlfor="flexCheckDefault">
                  Customer Facing Jobs that involve interacting with customers
                  directly.
                  <br />
                  Example: Cashier, Receptionist, Service Staff
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlfor="flexCheckDefault">
                  Non-Customer Facing Jobs that do not involve interacting with
                  customers directly.
                  <br />
                  Example: Cooks, Administrators, Analysts
                </label>
              </div>

              {/* ================================================================================================== */}
              {/*======================================Job Description ============================================ */}
              <div className="form-group mb-4">
                <label for="JobDescription" class="JobDescription">
                  Job Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Tip: Keep it simple!"
                ></textarea>
              </div>
              {/* ================================================================================================== */}
              {/*============================================Job Tasks ============================================ */}
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="Job Tasks">
                  Job Tasks
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="task1"
                  placeholder="Task 1"
                />
                <button type="button" class="btn btn-outline-secondary mt-3">
                  +
                </button>
              </div>
              {/* ================================================================================================== */}
              {/*============================================Expected Salary ============================================ */}
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="Job Tasks">
                  Expected Salary
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="minimum"
                  placeholder="Minimum"
                />
                <p>to</p>
                <input
                  type="text"
                  class="form-control"
                  id="maximum"
                  placeholder="Maximum"
                />
              </div>
              {/* ================================================================================================== */}
              {/*==================================================Address ============================================ */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlfor="flexCheckDefault">
                  Location of job is same as office address
                </label>
              </div>
              <div className="form-check mb-4">
                <label className="form-label" htmlFor="Job Tasks">
                  Postal Code
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="postal code"
                  placeholder="E.g 730712"
                />
              </div>
              <div className="form-check mb-4">
                <label className="form-label" htmlFor="Block/StreetNumber">
                  Block/StreetNumber
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="postal code"
                  placeholder="E.g 730712"
                />
              </div>
              <div className="form-check mb-4">
                <label className="form-label" htmlFor="Unit Number">
                  Unit Number, <span>if applicable</span>
                </label>
              </div>
              <input
                type="text"
                class="form-control"
                id="postal code"
                placeholder="E.g 730712"
              />
              <div className="form-check mb-4">
                <label for="Accessibility" class="Accessibility">
                  Accessibility of Job Location
                </label>
                <textarea
                  class="form-control mb-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="
                    Some question to consider: 
                    - What transport might an employee have to take to reach the workplace? 
                    - Is there sufficient space for the use of mobility devices such as wheelchairs?
                    "
                ></textarea>
                <p>200/200 characters left</p>
              </div>
              {/* ================================================================================================== */}
              <button type="button" class="btn btn-dark mt-3">
                Proceed to 'Accessibility Consideration Section'{" "}
              </button>
            </div>
          </div>
          <div className="col-md-1"></div>
        </form>
      </section>
      <section>
        <div class="d-grid gap-2 d-ld-block">
          <button type="button" class="btn btn-outline-warning btn-lg ">
            Save as Draft
          </button>
          <button type="button" class="btn btn-outline-warning btn-lg">
            Previous Job Post
          </button>
          <button type="button" class="btn btn-outline-warning btn-lg">
            Upload Job post
          </button>
        </div>
        <div class="progress mt-4">
          <div
            class="progress-bar"
            role="progressbar"
            Style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <small className="text-muted" htmlFor="progress-bar">
          75% complete
        </small>
      </section>
    </>
  );
};

export default JobAbout;
