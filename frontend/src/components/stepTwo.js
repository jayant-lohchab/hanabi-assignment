import React, { useState, useEffect } from "react";
import styles from "./StepTwo.module.css"; // Import your CSS module

const StepTwo = (props) => {
  const [formData, setFormData] = useState({
    number: "",
    email: "",
    name: "",
    birth: "",
  });

  useEffect(() => {
    const preFillForm = async () => {
      const response = await fetch(
        "https://hanabi-assignment-default-rtdb.firebaseio.com/users.json",
        { method: "GET" }
      );
      if (!response.ok) {
          throw new Error("getting user info failed");
        }
        const dataList = await response.json();
       if(!dataList){
        console.log("the list was empty");
       }
        else {
        const dataArray = Object.values(dataList);
        const reqData = dataArray.find(
          (data) => data.userName === props.forUser
        );
        if(!reqData){
            console.log("new user");
        }
        else{
            setFormData({
              ...formData,
              number: reqData.number,
              email: reqData.email,
              name: reqData.name,
              birth: reqData.birth,
            });

        }
      }
    };
    preFillForm();
  },[]);

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
          value={formData.number}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={inputChangeHandler}
          className={styles.inputField}
          value={formData.email}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          onChange={inputChangeHandler}
          className={styles.inputField}
          value={formData.name}
          required
        />
        <input
          type="text"
          name="birth"
          placeholder="Date of Birth"
          onChange={inputChangeHandler}
          className={styles.inputField}
          value={formData.birth}
          required
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
