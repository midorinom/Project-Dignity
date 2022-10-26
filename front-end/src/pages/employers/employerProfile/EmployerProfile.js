import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext"
import styles from "./employerProfile.module.css";
import { Link } from "react-router-dom";
const EmployerProfile = () => {
  const userCtx= useContext(UserContext)
  const [profileData, setProfileData]= useState({})

  useEffect(() => {
    if (userCtx.userDetails.profileCompleted) {
      getProfileData();
    }
  }, []);

  const getProfileData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5001/api/employers/get", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: userCtx.userDetails.id }),
      });
      const fetchedProfileData = await res.json();
      setProfileData(fetchedProfileData)
    } catch (err) {
      console.log(err);
    }
  };

  function displayProfile() {
    if (!userCtx.userDetails.profileCompleted) {
      
      // ==============
      // NoProfile Page
      // ==============
      return (
        <div className={styles.noProfileEmployer}>
          <p className={styles.noProfileHeading}>
            You Don't Have a Profile Yet
          </p>
          <p className={styles.noProfileText}>
            Create one now, so that job seekers can get to know you better!
          </p>
          <Link to="/profile-form">
            <button className={styles.createProfileButton}>
              Create profile
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <>
          <div className={`${styles.container}container-md`}>
            <div className="row m-1">
              <div className={`${styles.jobDescription} col-md-7`}>
                <div
                  className={`${styles.companyName} md-12 d-flex justify-content-between `}
                >
                  {profileData?.company}
                  <button>
                    <Link to="/profile-form">Edit Profile</Link>
                  </button>
                </div>
                <h6 className={`${styles.subheading} md-lg-6`}>Who We Are</h6>
                <p className={`${styles.p} md-lg-4`}>
                {profileData?.whoWeAre}
                </p>

                <h6 className={`${styles.subheading} md-lg-6`}>What We Do</h6>
                <p className={`${styles.p} md-lg-4`}>
                {profileData?.whatWeDo}
                {" "}
                </p>

                <h6 className={`${styles.subheading} md-lg-6`}>
                  Experience Working with Differently-abled Persons
                </h6>
                <p className={`${styles.p} md-lg-4`}>
                {profileData?.experience}
                </p>
              </div>

              {/* Side View */}

              <div className="col-md-3 mt-4">
                <Link to="/job-post-form">
                  <button className={`${styles.bottom_button} p-3`}>
                    Upload A Job Post
                  </button>
                </Link>
                {/*  Location and Accessibility Box*/}
                <div className={`${styles.box} container-md`}>
                  <h6 className={`${styles.subheading} md-lg-6`}>Location</h6>
                  <p className={`${styles.p} md-lg-4`}>
                  {profileData?.location}
                  </p>
                  <h6 className={`${styles.subheading} md-lg-6`}>
                    Accessibility
                  </h6>
                  <p className={`${styles.p} md-lg-4`}>
                  {profileData?.accessibility}
                  </p>
                </div>

                {/* Contact Number and Email Address Box */}
                <div className={`${styles.box} container-md`}>
                  <h6 className={`${styles.subheading} md-lg-6`}>Contact</h6>
                  <p className={`${styles.p} md-lg-4`}>Contact Number</p>
                  <p className={`${styles.p} md-lg-4`}>{profileData?.contact}</p>
                  <h6 className={`${styles.subheading} md-lg-6`}>
                    Email Address
                  </h6>
                  <p className={`${styles.p} md-lg-4`}>
                  {profileData?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  // ======
  // Return
  // ======
  const profilePage = displayProfile();
  return <>{profilePage}</>;
};

export default EmployerProfile;
