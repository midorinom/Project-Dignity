import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext";
import SavedJobsCard from "./SavedJobsCard";

const SavedJobs = (props) => {
  const userCtx = useContext(UserContext);
  const [jobsSaved, setJobsSaved] = useState([]);
  const [jobCards, setJobCards] = useState(undefined);

  // =====================================
  // onMount useEffect to fetch Jobs Saved
  // =====================================
  useEffect(() => {
    getJobsSaved(userCtx.userDetails.savedJobs);
  }, []);

  const getJobsSaved = async (savedJobs) => {
    const idArray = savedJobs.map((element) => element.id);

    try {
      const res = await fetch(
        "http://127.0.0.1:5001/api/jobposts/get/multiple-ids",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ids: idArray }),
        }
      );
      const fetchedJobPosts = await res.json();
      setJobsSaved(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // =======================================================
  // useEffect to map cards after JobsSaved has been fetched
  // =======================================================
  useEffect(() => {
    if (jobsSaved.length > 0) {
      mapCards();
    }
  }, [jobsSaved]);

  function mapCards() {
    setJobCards(
      jobsSaved.map((element) => {
        return (
          <SavedJobsCard
            jobPost={element}
            key={Math.random()}
            getJobsSaved={getJobsSaved}
            setSelectedJobPost={props.setSelectedJobPost}
          />
        );
      })
    );
  }

  return (
    <div>
      <div>{jobCards ? jobCards : "No Jobs Applied"}</div>
    </div>
  );
};

export default SavedJobs;
