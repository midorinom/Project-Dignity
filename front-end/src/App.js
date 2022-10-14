import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmployerLanding from "./components/EmployerLanding";
import JobSeekerLanding from "./components/JobSeekerLanding";
import UniversalLanding from "./components/UniversalLanding";
import Footer from "./components/Footer";
import JobListings from "./components/JobListings";
import Login from "./components/Login";
import JobSeekerProfile from "./components/JobSeekerProfile";
import EmployerProfile from "./components/EmployerProfile";
import JobSeekerProfileForm from "./components/JobSeekerProfileForm";
import JobUpload from "./components/JobUpload";
import JobPost from "./components/JobPost";

function App() {
  const [userType, setUserType] = useState("jobSeeker");

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
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/profile" element={profilePage} />
        <Route path="/profile-form" element={<JobSeekerProfileForm />} />
        <Route path="/job-upload" element={<JobUpload />} />
        <Route path="/job-post" element={<JobPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
