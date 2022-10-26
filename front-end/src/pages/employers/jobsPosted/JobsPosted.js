import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext";
import JobsPostedCard from "./JobsPostedCard";

const JobsPosted = (props) => {
  const userCtx = useContext(UserContext);
  const [jobsPosted, setJobsPosted] = useState([]);
  const [jobCards, setJobCards] = useState(undefined);

  // ======================================
  // onMount useEffect to fetch Jobs Posted
  // ======================================
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
          body: JSON.stringify({ employerId: userCtx.userDetails.id }),
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
      mapCards();
    }
  }, [jobsPosted]);

  function mapCards() {
    setJobCards(
      jobsPosted.map((element) => {
        return (
          <JobsPostedCard
            jobPost={element}
            key={Math.random()}
            getJobsPosted={getJobsPosted}
            setSelectedJobPost={props.setSelectedJobPost}
          />
        );
      })
    );
  }

  return (
    <div>
      <h1 className="m-4">My Jobs Posted</h1>
      <div>{jobCards ? jobCards : "No Jobs Posted"}</div>
    </div>
  );
};

export default JobsPosted;
