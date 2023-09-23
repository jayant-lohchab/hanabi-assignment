import React, { useState } from "react";
import styles from "./StepOne.module.css"; // Import your CSS module

const StepOne = (props) => {
  const [userName, setUserName] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userNameSubmitHandler = () => {
    props.onUserNameSubmit(userName);
  };

  return (
    <div className={styles.stepOneContainer}>
      <h1 className={styles.title}>This is HomePage</h1>
      <input
        type="text"
        name="userName"
        onChange={userNameHandler}
        placeholder="Enter User-Name"
        className={styles.inputField}
      />
      <button onClick={userNameSubmitHandler} className={styles.submitButton}>
        Submit
      </button>
    </div>
  );
};

export default StepOne;
