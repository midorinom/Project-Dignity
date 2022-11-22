import React from "react";
import styles from "./experienceCard.module.css";

const ExperienceCard = (props) => {
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startYear = props.experience.startDate.slice(0, 4);
  const startMonth = Number(props.experience.startDate.slice(5));
  const startDate = `${monthsArray[startMonth - 1]} ${startYear}`;

  const endDate = determineEndDate();

  function determineEndDate() {
    if (!props.experience.endDate) {
      return "Current";
    } else {
      let date = "";
      const year = props.experience.endDate.slice(0, 4);
      const month = Number(props.experience.endDate.slice(5));

      date = `${monthsArray[month - 1]} ${year}`;
      return date;
    }
  }

  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardHeader}>
        <span className={styles.experienceCardTitle}>
          <p>{props.experience.title}</p>
        </span>
        <p>{props.experience.company}</p>
        <p>
          {props.experience.type} / {startDate} - {endDate}
        </p>
      </div>
      <li>{props.experience.jobDesc}</li>
    </div>
  );
};

export default ExperienceCard;
