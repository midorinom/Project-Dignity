import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import JobAbout from "./JobAbout";
import EmployerAccessibility from "./EmployerAccessibility";
import styles from "./jobPostForm.module.css";
const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("About The Job");
  const [aboutJobSchema, setAboutJobSchema] = useState({});
  const [
    accessibilityConsiderationsSchema,
    setAccessibilityConsiderationsSchema,
  ] = useState();
  const [sectionSaved, setSectionSaved] = useState(false);

  const navigate = useNavigate();

  const userCtx = useContext(UserContext);

  //Create Job Poat
  const createJobPost = async (req, res) => {
    if (aboutJobSchema && accessibilityConsiderationsSchema) {
      try {
        // const aboutBody = aboutJobSchema;
        // aboutBody.company = userCtx.userDetails.company;

        const res = await fetch("http://127.0.0.1:5001/api/jobposts/create", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            employerId: userCtx.userDetails.id,
            jobPost: {
              about: {
                ...aboutJobSchema,
                company: userCtx.userDetails.company,
              },
              accessibility: accessibilityConsiderationsSchema,
            },
          }),
        });
        const createdJobPost = await res.json();
        console.log(createdJobPost);
        navigate("/employers/jobs-posted");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert(
        `Please save fill in required fields and save as draft before submitting`
      );
    }
  };

  // Render the current page
  function manageCurrentPage(e) {
    setCurrentPage(e.target.innerText);
  }

  // Render the landing page depending on what type of user is logged in
  function displayCurrentPage() {
    switch (currentPage) {
      case "About The Job":
        return (
          <JobAbout
            setCurrentPage={setCurrentPage}
            setAboutJobSchema={setAboutJobSchema}
            setSectionSaved={setSectionSaved}
            sectionSaved={sectionSaved}
            aboutJobSchema={aboutJobSchema}
          />
        );
      case "Accessibilty Considerations":
        return (
          <EmployerAccessibility
            setCurrentPage={setCurrentPage}
            setAccessibilityConsiderationsSchema={
              setAccessibilityConsiderationsSchema
            }
            setSectionSaved={setSectionSaved}
            sectionSaved={sectionSaved}
            createJobPost={createJobPost}
            aboutJobSchema={aboutJobSchema}
          />
        );
    }
  }
  const page = displayCurrentPage();

  return (
    <>
      <ul className={`nav justify-content-center ${styles.navBar}`}>
        <li className={`nav-item ${styles.li}`} onClick={manageCurrentPage}>
          <a
            className="nav-link active"
            style={{
              backgroundColor: currentPage === "About The Job" ? "#011036" : "",
              color: currentPage === "About The Job" ? "white" : "",
            }}
            aria-current="page"
            href="#"
          >
            About The Job
          </a>
        </li>
        <li className={`nav-item ${styles.li}`} onClick={manageCurrentPage}>
          <a
            className={`nav-link active ${styles.li}`}
            style={{
              backgroundColor:
                currentPage === "Accessibilty Considerations" ? "#011036" : "",
              color:
                currentPage === "Accessibilty Considerations" ? "white" : "",
            }}
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
