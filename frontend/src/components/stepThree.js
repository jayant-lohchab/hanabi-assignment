import React from "react";
import styles from "./StepThree.module.css"; // Import your CSS module

const StepThree = ({ userData, onNavigate }) => {
  return (
    <div className={styles.stepThreeContainer}>
      <h1 className={styles.title}>Result Page</h1>
      <div className={styles.resultBox}>
        <p className={styles.successMessage}>Congratulations! Form submitted successfully.</p>
        <div className={styles.userData}>
          <p>Username: {userData.username}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          <p>Date of Birth: {userData.dateOfBirth}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={onNavigate} className={styles.returnButton}>Return to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
