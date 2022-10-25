import React, { useContext } from "react";
import UserContext from "../../../context/userContext";
import Search from "../../../components/Search";

import jsLandingIcon1 from "./taskIcons/jsLanding1.png";
import jsLandingIcon2 from "./taskIcons/jsLanding2.png";
import jsLandingIcon3 from "./taskIcons/jsLanding3.png";

const JobSeekerLanding = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <div>
      <Search
        setSearchInput={props.setSearchInput}
        setIsSearch={props.setIsSearch}
        searchInput={props.searchInput}
      />
      <div className="m-4">
        {userCtx.userDetails.type === "jobSeeker" && (
          <div>
            <h1 className="display-3">Manage My Job Search</h1>
          </div>
        )}

        <div>
          <h1 className="display-3">What would you like to do today</h1>
          <div className="row">
            <div className="col-4 d-flex justify-content-center flex-column align-item-center">
              <img
                src={jsLandingIcon1}
                alt="task icon to job list"
                className="bg-dark"
              />
              <p className="text-center d-flex align-items-center justify-content-center my-0 p-4 w-100 mr-1 bg-warning">
                I would like to look for a job
              </p>
            </div>
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
      </div>
    </div>
  );
};

export default JobSeekerLanding;
