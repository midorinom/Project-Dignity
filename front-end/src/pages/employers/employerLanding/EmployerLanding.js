import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/userContext";
import Search from "../../../components/Search";
import eLand1 from "./taskIcons/eLand1.png";
import eLand2 from "./taskIcons/eLand2.png";
import eLand3 from "./taskIcons/eLand3.png";
import { Link } from "react-router-dom";

const EmployerLanding = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <div className="p-5">
      <Search
        setSearchInput={props.setSearchInput}
        searchInput={props.searchInput}
      />
      <div className="m-4">
        {userCtx.userDetails.type === "employer" && (
          <div>
            <h1 className="display-5">Manage My Job Listing</h1>
            <div className="row">
              <Link
                to="/job-post-form"
                className="col-4 d-flex justify-content-center flex-column align-item-center"
              >
                <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 bg-dark text-white">
                  Post A Job
                </p>
              </Link>
              <Link
                to="/employers/jobs-posted"
                className="col-4 d-flex justify-content-center flex-column align-item-center"
              >
                <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 bg-dark text-white">
                  My Job Posts
                </p>
              </Link>
            </div>
          </div>
        )}

        <div className="my-5">
          <h1 className="display-5">Frequently Asked Questions</h1>
          <div className="row">
            <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
              <img
                src={eLand1}
                alt="task icon to job list"
                className="bg-dark"
              />
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 bg-warning">
                How can I support differently-abled employees?
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
              <img src={eLand2} alt="task icon to job list" />
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 bg-warning">
                What schemes and grants am I eligible for?
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
              <img src={eLand3} alt="task icon to job list" />
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 bg-warning">
                What are some of the best inclusive hiring practices?
              </p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="display-5">Popular Topics</h1>
          <div className="row mb-4">
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 border border-secondary">
                Open Door Programme
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 border border-secondary">
                Apply for Enabling Mark Accreditation
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 border border-secondary">
                Enabling Masterplan 2030
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 border border-secondary">
                Assistive Technology Fund
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 border border-secondary">
                Designing an Accessible Workplace
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <p className="text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 border border-secondary">
                Workplace Disability Inclusive Index
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerLanding;
