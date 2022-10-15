import React, { useState } from "react";
import { Link } from "react-router-dom";
import dummyProfileData from "./job-seeker-profile-dummy";

const JobSeekerProfile = () => {
  const [profileIsCompleted, setProfileIsComplete] = useState(false);

  function displayProfile() {
    if (profileIsCompleted) {
      return <div>Completed Job Seeker Profile</div>;
    } else {
      return (
        <div className="centered" style={{ flexDirection: "column" }}>
          <h1>You Don't Have a Profile Yet</h1>
          <p>
            Create one now, so your future employer can get to know you better!
          </p>
          <Link to="/profile-form">
            <button>Create profile</button>
          </Link>
        </div>
      );
    }
  }

  return <>{displayProfile()}</>;
};

export default JobSeekerProfile;
