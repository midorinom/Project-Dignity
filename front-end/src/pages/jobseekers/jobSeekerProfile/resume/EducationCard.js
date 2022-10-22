import React from "react";
import styles from "./experienceCard.module.css";

const EducationCard = (props) => {
  function determineEndDate() {
    if (props.education.endMonth === null && props.education.endYear === null) {
      return "Current";
    } else {
      return `${props.education.endMonth} ${props.education.endYear}`;
    }
  }
  const endDate = determineEndDate();

  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardHeader}>
        <span className={styles.experienceCardTitle}>
          <p>{props.education.school}</p>
        </span>
        <p>{props.education.cert}</p>
        <p>
          {props.education.startMonth} {props.education.startYear} - {endDate}
        </p>
      </div>
      <li>{props.education.desc}</li>
    </div>
  );
};

export default EducationCard;
