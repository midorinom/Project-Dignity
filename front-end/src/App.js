import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import EmployerLanding from "./pages/employerLanding/EmployerLanding";
import JobSeekerLanding from "./pages/jobSeekerLanding/JobSeekerLanding";
import UniversalLanding from "./pages/universalLanding/UniversalLanding";
import JobListings from "./pages/jobListings/JobListings";
import Login from "./pages/login/Login";
import JobSeekerProfile from "./pages/jobSeekerProfile/JobSeekerProfile";
import EmployerProfile from "./pages/employerProfile/EmployerProfile";
import JobSeekerProfileForm from "./pages/jobSeekerProfileForm/JobSeekerProfileForm";
import JobUploadForm from "./pages/jobUploadForm/JobUploadForm";
import JobPost from "./pages/jobPost/JobPost";

function App() {
  // Change this initial value to jobSeeker/employer if you need to access those landing/profile pages
  const [userType, setUserType] = useState("none");

  // Render the landing page depending on what type of user is logged in
  function displayLandingPage() {
    switch (userType) {
      case "jobSeeker":
        return <JobSeekerLanding />;
      case "employer":
        return <EmployerLanding />;
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

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={landingPage} />
        <Route path="/job-seekers" element={<JobSeekerLanding />} />
        <Route path="/employers" element={<EmployerLanding />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/profile" element={profilePage} />
        <Route path="/profile-form" element={<JobSeekerProfileForm />} />
        <Route path="/job-upload-form" element={<JobUploadForm />} />
        <Route path="/job-post" element={<JobPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
