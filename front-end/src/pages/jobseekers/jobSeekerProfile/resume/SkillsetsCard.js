import React from "react";
import styles from "./skillsetsCard.module.css";

const SkillsetsCard = (props) => {
  let date = "";
  if (props.skillset.issueDate) {
    const year = props.skillset.issueDate.slice(0, 4);
    const month = Number(props.skillset.issueDate.slice(5));
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

    date = `${monthsArray[month - 1]} ${year}`;
  }

  return (
    <li className={styles.skillsetCard}>
      <p className={styles.skillsetName}>{props.skillset.skill}</p>
      {props.skillset.cert && (
        <p className={styles.skillsetCert}>{props.skillset.cert}</p>
      )}
      {props.skillset.issueDate && (
        <p className={styles.skillsetCertAcquired}>Acquired: {date}</p>
      )}
    </li>
  );
};

export default SkillsetsCard;
