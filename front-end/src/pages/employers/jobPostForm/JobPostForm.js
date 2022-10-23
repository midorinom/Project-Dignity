import React, { useState } from "react";
import JobAbout from "./JobAbout";
import EmployerAccessibility from "./EmployerAccessibility";
import styles from "./jobPostForm.module.css";
const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("About The Job");
  // Render the current page
  function manageCurrentPage(e) {
    setCurrentPage(e.target.innerText);
  }

  // Render the landing page depending on what type of user is logged in
  function displayCurrentPage() {
    switch (currentPage) {
      case "About The Job":
        return <JobAbout setCurrentPage={setCurrentPage} />;
      case "Accessibilty Considerations":
        return <EmployerAccessibility setCurrentPage={setCurrentPage} />;
    }
  }
  const page = displayCurrentPage();

  return (
    <>
      <ul class={`nav justify-content-center ${styles.navBar}`}>
        <li class={`nav-item ${styles.li}`} onClick={manageCurrentPage}>
          <a class="nav-link active" aria-current="page" href="#">
            About The Job
          </a>
        </li>
        <li class={`nav-item ${styles.li}`} onClick={manageCurrentPage}>
          <a
            class={`nav-link active ${styles.li}`}
            href="#"
          >
            Accessibilty Considerations
          </a>
        </li>
      </ul>
      {/* <div className="centered">Banner with Profile Photo</div>
      <div className="centered">
        <div onClick={manageCurrentPage}>About The Job</div>
        <div onClick={manageCurrentPage}>Accessibilty Considerations</div>
      </div> */}
      {page}
    </>
  );
};

export default JobPost;
