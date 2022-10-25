import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/userContext";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import EmployerLanding from "./pages/employers/employerLanding/EmployerLanding";
import JobSeekerLanding from "./pages/jobseekers/jobSeekerLanding/JobSeekerLanding";
import UniversalLanding from "./pages/universalLanding/UniversalLanding";
import JobListings from "./pages/jobListings/JobListings";
import Login from "./pages/login/Login";
import JobSeekerProfile from "./pages/jobseekers/jobSeekerProfile/JobSeekerProfile";
import JobSeekerProfileForm from "./pages/jobseekers/jobSeekerProfileForm/JobSeekerProfileForm";
import EmployerProfile from "./pages/employers/employerProfile/EmployerProfile";
import EmployerProfileForm from "./pages/employers/employerProfileForm/EmployerProfileForm";
import JobPostDetails from "./pages/jobListings/jobPostDetails/jobPostDetails";
import JobPostForm from "./pages/employers/jobPostForm/JobPostForm";
import SuccessfulApplication from "./pages/jobListings/jobPostDetails/SuccessfulApplication";

function App() {
  // =========
  // Variables
  // =========
  // Change this userType initial value to jobSeeker/employer if you need to access those landing/profile/profileForm pages

  const [userDetails, setUserDetails] = useState({ type: "" });
  const [searchInput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [selectedJobPost, setSelectedJobPost] = useState({});

  // ===================
  // Conditional Renders
  //====================
  // Render the landing page depending on what type of user is logged in
  function displayLandingPage() {
    switch (userDetails.type) {
      case "jobSeeker":
        return (
          <JobSeekerLanding
            userType={userDetails.type}
            setSearchInput={setSearchInput}
            setIsSearch={setIsSearch}
            searchInput={searchInput}
          />
        );
      case "employer":
        return (
          <EmployerLanding
            userType={userDetails.type}
            setSearchInput={setSearchInput}
            setIsSearch={setIsSearch}
            searchInput={searchInput}
          />
        );
      default:
        return <UniversalLanding />;
    }
  }
  const landingPage = displayLandingPage();

  // Render the profile page depending on what type of user is logged in
  function displayProfilePage() {
    switch (userDetails.type) {
      case "jobSeeker":
        return <JobSeekerProfile />;
      case "employer":
        return <EmployerProfile />;
      default:
        return <Login />;
    }
  }
  const profilePage = displayProfilePage();

  // Render the profile form page depending on what type of user is logged in
  function displayProfileFormPage() {
    if (userDetails.type === "jobSeeker") {
      return <JobSeekerProfileForm />;
    } else if (userDetails.type === "employer") {
      return <EmployerProfileForm />;
    }
  }
  const profileFormPage = displayProfileFormPage();

  // ======
  // Return
  // ======
  return (
    <>
      <NavBar />
      <UserContext.Provider value={{ userDetails, setUserDetails }}>
        <Routes>
          <Route path="/" element={landingPage} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/job-seekers"
            element={
              <JobSeekerLanding
                userType={userDetails.type}
                setSearchInput={setSearchInput}
                setIsSearch={setIsSearch}
                searchInput={searchInput}
              />
            }
          />
          <Route
            path="/employers"
            element={
              <EmployerLanding
                userType={userDetails.type}
                setSearchInput={setSearchInput}
                setIsSearch={setIsSearch}
                searchInput={searchInput}
              />
            }
          />
          <Route
            path="/job-listings"
            element={
              <JobListings
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
                setSelectedJobPost={setSelectedJobPost}
              />
            }
          />
          <Route path="/profile" element={profilePage} />
          <Route path="/profile-form" element={profileFormPage} />
          <Route
            path="/job-post-details"
            element={<JobPostDetails selectedJobPost={selectedJobPost} />}
          />
          <Route
            path="/successful-application"
            element={<SuccessfulApplication />}
          />
          <Route path="/job-post-form" element={<JobPostForm />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
