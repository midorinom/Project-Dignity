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
import ManageJobs from "./pages/jobseekers/manageJobs.js/ManageJobs";
import JobsPosted from "./pages/employers/jobsPosted/JobsPosted";
import CompanyProfile from "./pages/jobListings/jobPostDetails/CompanyProfile";

function App() {
  // =========
  // Variables
  // =========
  const [userDetails, setUserDetails] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [profileIsCompleted, setProfileIsCompleted] = useState(false);
  const [profileData, setProfileData] = useState(undefined); // profile returned from api fetch
  const [selectedJobPost, setSelectedJobPost] = useState({});
  const [selectedCompanyProfile, setSelectedCompanyProfile] = useState("");
  const [manageJobsCurrentPage, setManageJobsCurrentPage] = useState("saved");

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
            searchInput={searchInput}
            setManageJobsCurrentPage={setManageJobsCurrentPage}
          />
        );
      case "employer":
        return (
          <EmployerLanding
            userType={userDetails.type}
            setSearchInput={setSearchInput}
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
        return (
          <JobSeekerProfile
            profileIsCompleted={profileIsCompleted}
            setProfileIsCompleted={setProfileIsCompleted}
            profileData={profileData}
            setProfileData={setProfileData}
          />
        );
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
      return (
        <JobSeekerProfileForm
          profileIsCompleted={profileIsCompleted}
          setProfileIsCompleted={setProfileIsCompleted}
          profileData={profileData}
        />
      );
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
      <UserContext.Provider value={{ userDetails, setUserDetails }}>
        <NavBar />
        <Routes>
          <Route path="/" element={landingPage} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/job-seekers"
            element={
              <JobSeekerLanding
                userType={userDetails.type}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
              />
            }
          />
          <Route
            path="/manage-jobs"
            element={
              <ManageJobs
                manageJobsCurrentPage={manageJobsCurrentPage}
                setManageJobsCurrentPage={setManageJobsCurrentPage}
                setSelectedJobPost={setSelectedJobPost}
              />
            }
          />
          <Route
            path="/employers"
            element={
              <EmployerLanding
                userType={userDetails.type}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
              />
            }
          />
          <Route path="/job-post-form" element={<JobPostForm />} />
          <Route
            path="/employers/jobs-posted"
            element={<JobsPosted setSelectedJobPost={setSelectedJobPost} />}
          />
          <Route
            path="/job-listings"
            element={
              <JobListings
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSelectedJobPost={setSelectedJobPost}
              />
            }
          />
          <Route path="/profile" element={profilePage} />
          <Route path="/profile-form" element={profileFormPage} />
          <Route
            path="/job-post-details"
            element={
              <JobPostDetails
                selectedJobPost={selectedJobPost}
                setSelectedCompanyProfile={setSelectedCompanyProfile}
              />
            }
          />
          <Route
            path="/successful-application"
            element={<SuccessfulApplication />}
          />
          <Route
            path="/job-post-details/company-profile"
            element={
              <CompanyProfile selectedCompanyProfile={selectedCompanyProfile} />
            }
          />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
