import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext";
import JobsPostedCard from "./JobsPostedCard";

const JobsPosted = () => {
  const userCtx = useContext(UserContext);
  const [jobsPosted, setJobsPosted] = useState([]);
  const [jobCards, setJobCards] = useState(undefined);

  // ====================================
  // onMount useEffect fetch Profile Data
  // ====================================
  useEffect(() => {
    getJobsPosted();
  }, []);

  const getJobsPosted = async () => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5001/api/jobposts/get/employer-id",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ employerId: "6351180cb981f5f286656765" }), // set to userCtx.userDetails.id
        }
      );
      const fetchedJobPosts = await res.json();
      setJobsPosted(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // ========================================================
  // useEffect to map cards after JobsPosted has been fetched
  // ========================================================
  useEffect(() => {
    if (jobsPosted.length > 0) {
      console.log("jobsPosted has been fetched", jobsPosted);
    }
    mapCards();
  }, [jobsPosted]);

  function mapCards() {
    setJobCards(
      jobsPosted.map((element) => {
        return <JobsPostedCard jobPost={element.jobPost} />;
      })
    );
  }

  return (
    <div>
      <h1 className="m-4">My Jobs Posted</h1>
      <div>{jobCards}</div>
    </div>
  );
};

export default JobsPosted;
