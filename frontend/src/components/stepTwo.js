import React, { useState } from "react";
import styles from "./StepTwo.module.css"; // Import your CSS module

const StepTwo = (props) => {
  const [formData, setFormData] = useState({
    number: "",
    email: "",
    name: "",
    birth: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const cancelFormHandler = () => {
    props.onCancel(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onFormSubmit(formData);
  };

  return (
    <div className={styles.stepTwoContainer}>
      <h1>Form Page</h1>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          onChange={inputChangeHandler}
          className={styles.inputField}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={inputChangeHandler}
          className={styles.inputField}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          onChange={inputChangeHandler}
          className={styles.inputField}
        />
        <input
          type="date"
          name="birth"
          placeholder="Date of Birth"
          onChange={inputChangeHandler}
          className={styles.inputField}
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <button onClick={cancelFormHandler} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
