import React from "react";
import styles from "./recommendedJobsCard.module.css";
import saveIcon from "./images/saveIcon.png";

const RecommendedJobsCard = (props) => {
  return (
    <div className={styles.recommendedJobsCard}>
      <div className={styles.saveIconContainer}>
        <img src={saveIcon} alt="Save Button" className={styles.saveIcon} />
        <p className={styles.saveText}>Save</p>
      </div>
      <div className={styles.recommendedJobsCardText}>
        <p>{props.jobData.jobTitle}</p>
        <p>{props.jobData.employer}</p>
        <p>
          {props.jobData.employmentType} / {props.jobData.location}
        </p>
      </div>
    </div>
  );
};

export default RecommendedJobsCard;
