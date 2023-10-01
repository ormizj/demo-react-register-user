import React, { useState } from "react";

import styles from "./RegisterUser.module.scss";
import Card from "components/Card/Card";

const userInputsInitial = {
  username: "",
  age: "",
};

const RegisterUser = (props) => {
  const [userInputs, setUserInputs] = useState(userInputsInitial);

  const userInputsHandler = (key, value) => {
    setUserInputs((prevUserInputs) => ({
      ...prevUserInputs,
      [key]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isRegisterSuccessful = props.onRegisterUser(userInputs);
    if (isRegisterSuccessful) setUserInputs(userInputsInitial);
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={styles["register-user-form"]}>
        <section className={styles["section-block"]}>
          <label htmlFor="username" className="bold">
            Username
          </label>
          <input
            id="username"
            onChange={(e) => userInputsHandler("username", e.target.value)}
            value={userInputs.username}
          />
        </section>
        <section className={styles["section-block"]}>
          <label htmlFor="age" className="bold">
            Age (Years)
          </label>
          <input
            id="age"
            type="number"
            onChange={(e) => userInputsHandler("age", e.target.value)}
            value={userInputs.age}
          />
        </section>
        <button className={styles["submit-button"]}>Add User</button>
      </form>
    </Card>
  );
};

export default RegisterUser;
