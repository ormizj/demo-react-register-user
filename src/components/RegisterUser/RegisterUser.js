import React, { useState } from "react";

import styles from "./RegisterUser.module.scss";
import Card from "components/Card/Card";

const RegisterUser = (props) => {
  const [userInputs, setUserInputs] = useState({
    username: "",
    age: "",
  });

  const userInputsHandler = (key, value) => {
    setUserInputs((prevUserInputs) => ({
      ...prevUserInputs,
      [key]: value,
    }));
  };

  const submitHandler = () => {};

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
