import React, {useState} from "react";
import JobAbout from "./JobAbout";
import EmployerAccessibility from "./EmployerAccessibility";

const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("About");
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
      <div className="centered">Banner with Profile Photo</div>
      <div className="centered">
        <div onClick={manageCurrentPage}>About The Job</div>
        <div onClick={manageCurrentPage}>Accessibilty Considerations</div>
      </div>
      {page}
    </>
  );
};

export default JobPost;
