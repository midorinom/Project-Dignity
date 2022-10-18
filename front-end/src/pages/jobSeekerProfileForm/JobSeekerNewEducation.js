import React from "react";

const JobSeekerNewEducation = () => {
  return (
    <>
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
      <hr></hr>
    </>
  );
};

export default JobSeekerNewEducation;
