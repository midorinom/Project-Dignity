import React from "react";

const JobPostDetails = (props) => {
  const about = props.selectedJobPost.about;
  const access = props.selectedJobPost.accessibility;

  return (
    <div className="container">
      <div className="row d-flex">
        <h1 className="col-auto d-flex align-items-center my-1 mr-2 display-2">
          {about.title}
        </h1>
        <p className="col-auto d-flex align-items-center my-1">{about.type}</p>
      </div>
      <div className="row">
        {/* about column */}
        <div className="col-9">
          <div>
            <h1 className="display-4 m-0">{about.company}</h1>
            <button className="btn btn-outline-warning btn-sm">
              Read about the company
            </button>
          </div>
          <div>
            <h1 className="display-6 m-0">Job Description</h1>
            <p className="m-0">{about.desc}</p>
          </div>
          <div>
            <h1 className="display-6 m-0">Job Interaction Type</h1>
            <p className="m-0">
              This is a {about.customerFacing ? "customer" : "non-customer"}{" "}
              facing role.
            </p>
          </div>
          <div>
            <h1 className="display-6 m-0">Job Tasks</h1>
            <ul className="list-unstyled">
              {about.tasks.map((task, id) => {
                return <li key={id}>{task}</li>;
              })}
            </ul>
          </div>
          <div>
            <h1 className="display-6 m-0">Key Skillsets and Qualities</h1>
            <ul className="list-unstyled">
              {about.skills.map((task, id) => {
                return <li key={id}>{task}</li>;
              })}
            </ul>
          </div>
          <div>
            <h1 className="display-6 m-0">Expected Salary</h1>
            <p className="m-0">{`S$${about.minSalary} to S$${about.maxSalary}`}</p>
          </div>
          <div>
            <h1 className="display-6 m-0">Job Location and Accessibility</h1>
            <p className="m-0"></p>
          </div>
          <div>
            <h1 className="display-6 m-0">Images of the Workplace</h1>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default JobPostDetails;
