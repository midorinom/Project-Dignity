import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobAbout from "./JobAbout";
import EmployerAccessibility from "./EmployerAccessibility";
import styles from "./jobPostForm.module.css";
const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("About The Job");
  const [aboutJobSchema, setAboutJobSchema]=useState()
  const [accessibilityConsiderationsSchema, setAccessibilityConsiderationsSchema]=useState()
  const [sectionSaved, setSectionSaved] = useState(false);
  const [toSaveProfile, setToSaveProfile] = useState(false);
  const [profile, setProfile] = useState({
    employerId: "",
    jobPost: {
      about: "",
      accessibility: "",
    },
  })
  const navigate = useNavigate();

  // Render the current page
  function manageCurrentPage(e) {
    setCurrentPage(e.target.innerText);
  }

  // Render the landing page depending on what type of user is logged in
  function displayCurrentPage() {
    switch (currentPage) {
      case "About The Job":
        return <JobAbout setCurrentPage={setCurrentPage} setAboutJobSchema={setAboutJobSchema} setSectionSaved={setSectionSaved} sectionSaved={sectionSaved}

        />;
      case "Accessibilty Considerations":
        return <EmployerAccessibility setCurrentPage={setCurrentPage} setAccessibilityConsiderationsSchema={setAccessibilityConsiderationsSchema} setSectionSaved={setSectionSaved} sectionSaved={sectionSaved}
        />;
    }
  }
  const page = displayCurrentPage();

  // useEffect(()=>{
  //   if (
  //     aboutJobSchema &&
  //     accessibilityConsiderationsSchema &&
  //     toSaveProfile
  //   ) {
  //     setProfile({
  //       about: aboutJobSchema,
  //       accessibility: accessibilityConsiderationsSchema,
  //     });
      
  //     const createJobPost = async (req, res) => {
  //       try {
  //         const hardCodedId = "6352b602869782ec9b076cf3";

  //         const res = await fetch(
  //           "http://127.0.0.1:5001/api/employers/update",
  //           {
  //             method: "PATCH",
  //             headers: { "content-type": "application/json" },
  //             body: JSON.stringify(
  //               {
  //                 employerId: hardCodedId,
  //                 jobPost: 
  //                 { 
  //                  about: aboutJobSchema,
  //                  accessibility: accessibilityConsiderationsSchema
  //                 }
  //                }
  //             ),
  //           }
  //         );
  //         const createdJobPost = await res.json();

  //         console.log(createdJobPost);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     createJobPost();
  //     navigate("/profile");
  //   } else {
  //     alert(`Missing fields`);
  //   }
  // }, [toSaveProfile]);

  return (
    <>
      <ul className={`nav justify-content-center ${styles.navBar}`}>
        <li className={`nav-item ${styles.li}`} onClick={manageCurrentPage}>
          <a className="nav-link active" aria-current="page" href="#">
            About The Job
          </a>
        </li>
        <li className={`nav-item ${styles.li}`} onClick={manageCurrentPage}>
          <a
            className={`nav-link active ${styles.li}`}
            href="#"
          >
            Accessibilty Considerations
          </a>
        </li>
      </ul>
      {page}
    </>
  );
};

export default JobPost;
