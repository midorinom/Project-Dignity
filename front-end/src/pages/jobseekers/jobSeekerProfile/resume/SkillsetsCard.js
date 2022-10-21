import React from "react";
import styles from "./skillsetsCard.module.css";

const SkillsetsCard = (props) => {
  return (
    <li className={styles.skillsetCard}>
      <p className={styles.skillsetName}>{props.skillset.skill}</p>
      <p className={styles.skillsetCert}>{props.skillset.cert}</p>
      <p className={styles.skillsetCertAcquired}>
        Acquired: {props.skillset.issueMonth} {props.skillset.issueYear}
      </p>
    </li>
  );
};

export default SkillsetsCard;
