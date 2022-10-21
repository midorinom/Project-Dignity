import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  // Change this userType initial value to jobSeeker/employer if you need to access those landing/profile/profileForm pages
  const [userType, setUserType] = useState("jobSeeker");

  // Render the landing page depending on what type of user is logged in
  function displayLandingPage() {
    switch (userType) {
      case "jobSeeker":
        return <JobSeekerLanding userType={userType} />;
      case "employer":
        return <EmployerLanding userType={userType} />;
      default:
        return <UniversalLanding />;
    }
  }
  const landingPage = displayLandingPage();

  // Render the profile page depending on what type of user is logged in
  function displayProfilePage() {
    switch (userType) {
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
    if (userType === "jobSeeker") {
      return <JobSeekerProfileForm />;
    } else if (userType === "employer") {
      return <EmployerProfileForm />;
    }
  }

  const profileFormPage = displayProfileFormPage();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={landingPage} />
        <Route path="/job-seekers" element={<JobSeekerLanding />} />
        <Route path="/employers" element={<EmployerLanding />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/profile" element={profilePage} />
        <Route path="/profile-form" element={profileFormPage} />
        <Route path="/job-post-details" element={<JobPostDetails />} />
        <Route path="/job-post-form" element={<JobPostForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
