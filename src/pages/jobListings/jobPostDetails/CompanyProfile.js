import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext";
import styles from "../../employers/employerProfile/employerProfile.module.css";
const CompanyProfile = (props) => {
  const userCtx = useContext(UserContext);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    console.log("selectedCompanyProfile", props.selectedCompanyProfile);

    try {
      const res = await fetch(
        "https://project-dignity-backend.onrender.com/api/employers/get",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: props.selectedCompanyProfile }),
        }
      );
      const fetchedProfileData = await res.json();
      setProfileData(fetchedProfileData);
    } catch (err) {
      console.log(err);
    }
  };

  // ======
  // Return
  // ======
  return (
    <>
      <div className={`${styles.container}container-md`}>
        <div className="row m-1">
          <div className={`${styles.jobDescription} col-md-7`}>
            <div
              className={`${styles.companyName} md-12 d-flex justify-content-between `}
            >
              {profileData?.company}
            </div>
            <h6 className={`${styles.subheading} md-lg-6`}>Who We Are</h6>
            <p className={`${styles.p} md-lg-4`}>{profileData?.whoWeAre}</p>

            <h6 className={`${styles.subheading} md-lg-6`}>What We Do</h6>
            <p className={`${styles.p} md-lg-4`}>{profileData?.whatWeDo} </p>

            <h6 className={`${styles.subheading} md-lg-6`}>
              Experience Working with Differently-abled Persons
            </h6>
            <p className={`${styles.p} md-lg-4`}>{profileData?.experience}</p>
          </div>

          {/* Side View */}

          <div className="col-md-3 mt-4">
            {/*  Location and Accessibility Box*/}
            <div className={`${styles.box} container-md`}>
              <h6 className={`${styles.subheading} md-lg-6`}>Location</h6>
              <p className={`${styles.p} md-lg-4`}>{profileData?.location}</p>
              <h6 className={`${styles.subheading} md-lg-6`}>Accessibility</h6>
              <p className={`${styles.p} md-lg-4`}>
                {profileData?.accessibility}
              </p>
            </div>

            {/* Contact Number and Email Address Box */}
            <div className={`${styles.box} container-md`}>
              <h6 className={`${styles.subheading} md-lg-6`}>Contact</h6>
              <p className={`${styles.p} md-lg-4`}>Contact Number</p>
              <p className={`${styles.p} md-lg-4`}>{profileData?.contact}</p>
              <h6 className={`${styles.subheading} md-lg-6`}>Email Address</h6>
              <p className={`${styles.p} md-lg-4`}>{profileData?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
