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
import SavedJobs from "./pages/jobseekers/saved-jobs/SavedJobs";
import JobsPosted from "./pages/employers/JobsPosted";

function App() {
  // =========
  // Variables
  // =========
  const [userDetails, setUserDetails] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [selectedJobPost, setSelectedJobPost] = useState({});

  // Managing the states for jobSeekerProfile and jobSeekerProfileForm
  // Change this profileIsCompleted initial value to false/true to access the NoProfile/CompletedProfile pages
  const [profileIsCompleted, setProfileIsCompleted] = useState(false);
  const [profileData, setProfileData] = useState(undefined); // profile returned from api fetch

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
          <Route path="/saved-jobs" element={<SavedJobs />} />
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
          <Route path="/employers/jobs-posted" element={<JobsPosted />} />
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
            element={<JobPostDetails selectedJobPost={selectedJobPost} />}
          />
          <Route
            path="/successful-application"
            element={<SuccessfulApplication />}
          />
          <Route path="/job-post-form" element={<JobPostForm />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
