import React from "react";
import styles from "./experienceCard.module.css";

const ExperienceCard = (props) => {
  function determineEndDate() {
    if (props.experience.endMonth === "" && props.experience.endYear === "") {
      return "Current";
    } else {
      return `${props.experience.endMonth} ${props.experience.endYear}`;
    }
  }
  const endDate = determineEndDate();

  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardHeader}>
        <span className={styles.experienceCardTitle}>
          <p>{props.experience.title}</p>
        </span>
        <p>{props.experience.company}</p>
        <p>
          {props.experience.type} / {props.experience.startMonth}{" "}
          {props.experience.startYear} - {endDate}
        </p>
      </div>
      <li>{props.experience.jobDesc}</li>
    </div>
  );
};

export default ExperienceCard;
