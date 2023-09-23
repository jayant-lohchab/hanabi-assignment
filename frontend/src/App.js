import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    userName: "",
    number: "",
    email: "",
    name: "",
    birth: "",
  });
  const submitUserNameHandler = (userNamew) => {
    setUserData({ ...userData, userName: userNamew });
    console.log(userData);
    setStep(2);
  };
  const submitFormHandler = (formData) => {
    setUserData({
      ...userData,
      number: formData.number,
      email: formData.email,
      name: formData.name,
      birth: formData.birth,
    });
    setStep(3);
  };
  const cancelFormHandler = () => {
    setUserData({
      userName: "",
      number: "",
      email: "",
      name: "",
      birth: "",
    });
    setStep(1);
  };
  return (
    <div>
      {step === 1 && <StepOne onUserNameSubmit={submitUserNameHandler} />}
      {step === 2 && (
        <StepTwo
          onFormSubmit={submitFormHandler}
          onCancel={cancelFormHandler}
        />
      )}
      {step === 3 && (
        <StepThree userData={userData} onNavigate={() => setStep(1)} />
      )}
    </div>
  );
}

export default App;
