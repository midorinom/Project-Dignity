import React, { useContext } from "react";
import UserContext from "../../../context/userContext";
import Search from "../../../components/Search";

import jsLandingIcon1 from "./taskIcons/jsLanding1.png";
import jsLandingIcon2 from "./taskIcons/jsLanding2.png";
import jsLandingIcon3 from "./taskIcons/jsLanding3.png";
import { Link } from "react-router-dom";

const JobSeekerLanding = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <div className="p-5">
      <Search
        setSearchInput={props.setSearchInput}
        setIsSearch={props.setIsSearch}
        searchInput={props.searchInput}
      />
      <div className="m-4">
        {userCtx.userDetails.type === "jobSeeker" && (
          <div>
            <h1 className="display-5">Manage My Job Search</h1>
            <div className="row">
              <div className="col-4 d-flex justify-content-center flex-column align-item-center">
                <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 bg-dark text-white">
                  My Applied Jobs
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center flex-column align-item-center">
                <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 bg-dark text-white">
                  My Saved Jobs
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center flex-column align-item-center">
                <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 bg-dark text-white">
                  My CV
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="my-5">
          <h1 className="display-5">What would you like to do today</h1>
          <div className="row">
            <Link
              to="/job-listings"
              className="col-4 d-flex justify-content-center flex-column align-item-center"
            >
              <img
                src={jsLandingIcon1}
                alt="task icon to job list"
                className="bg-dark"
              />
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 bg-warning">
                I would like to look for a job
              </p>
            </Link>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <img src={jsLandingIcon2} alt="task icon to job list" />
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 bg-warning">
                I would like some job advice
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <img src={jsLandingIcon3} alt="task icon to job list" />
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 bg-warning">
                I want to know more about inclusive employers
              </p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="display-5">Popular Topics</h1>
          <div className="row mb-4">
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 border border-secondary">
                Job Shadowing
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 border border-secondary">
                Assistive Technology Fund
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 border border-secondary">
                Find an Employment Coach
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 border border-secondary">
                Internships
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 border border-secondary">
                Stories of Differently-abled Persons at Work
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 border border-secondary">
                Training Programmes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerLanding;
