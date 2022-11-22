import React from "react";
import styles from "./experienceCard.module.css";

const EducationCard = (props) => {
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

  const startYear = props.education.startDate.slice(0, 4);
  const startMonth = Number(props.education.startDate.slice(5));
  const startDate = `${monthsArray[startMonth - 1]} ${startYear}`;

  const endDate = determineEndDate();

  function determineEndDate() {
    if (!props.education.endDate) {
      return "Current";
    } else {
      let date = "";
      const year = props.education.endDate.slice(0, 4);
      const month = Number(props.education.endDate.slice(5));

      date = `${monthsArray[month - 1]} ${year}`;
      return date;
    }
  }

  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardHeader}>
        <span className={styles.experienceCardTitle}>
          <p>{props.education.school}</p>
        </span>
        <p>{props.education.cert}</p>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <li>{props.education.desc}</li>
    </div>
  );
};

export default EducationCard;
