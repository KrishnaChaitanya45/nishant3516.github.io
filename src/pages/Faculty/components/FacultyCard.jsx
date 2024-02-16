import React from "react";
import styles from "../../../global/styles/Faculty.module.css";
const FacultyCard = ({
  facultyName,
  color,
  qualifications,
  position,
  experience,
  image,
}) => {
  return (
    <div
      className={styles.facultyCard}
      style={{
        backgroundColor: color,
      }}
    >
      <img src={image} alt="" className={styles.image} />
      <div className={styles.sideFacultyContainer}>
        <h2>{facultyName}</h2>
        <p>{qualifications}</p>
        <p>{position}</p>
        <div
          style={{
            display: "flex",
            margin: 0,
          }}
        >
          <span className={styles.expQues}>Experience : </span>
          <span className={styles.exp}>{experience}</span>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
