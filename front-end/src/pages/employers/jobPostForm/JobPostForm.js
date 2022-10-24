import React, { useState } from "react";
import JobAbout from "./JobAbout";
import EmployerAccessibility from "./EmployerAccessibility";
import styles from "./jobPostForm.module.css";
const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("About The Job");
  const [aboutJobSchema, setAboutJobSchema]=useState()
  const [accessibilityConsiderations, setaccessibilityConsiderations]=useState()
  
  // Render the current page
  function manageCurrentPage(e) {
    setCurrentPage(e.target.innerText);
  }

  // Render the landing page depending on what type of user is logged in
  function displayCurrentPage() {
    switch (currentPage) {
      case "About The Job":
        return <JobAbout setCurrentPage={setCurrentPage} setAboutJobSchema={setAboutJobSchema}/>;
      case "Accessibilty Considerations":
        return <EmployerAccessibility setCurrentPage={setCurrentPage} setaccessibilityConsiderations={setaccessibilityConsiderations}/>;
    }
  }
  const page = displayCurrentPage();

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
