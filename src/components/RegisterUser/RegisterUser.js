import React, { useState } from "react";

import styles from "./RegisterUser.module.scss";
import Card from "components/Card/Card";

const userInputsInitial = {
  username: "",
  age: "",
};

const RegisterUser = (props) => {
  const [userInputs, setUserInputs] = useState(userInputsInitial);

  // creating correct type variables
  const formatAge = +userInputs.age;
  const formatUsername = userInputs.username;

  const userInputsHandler = (key, value) => {
    setUserInputs((prevUserInputs) => ({
      ...prevUserInputs,
      [key]: value,
    }));
  };

  const registerUserHandler = (e) => {
    e.preventDefault();

    const errMsg = validateRegisterUser();
    if (errMsg.length !== 0) {
      props.onErrMsg(errMsg);
      return;
    }

    props.onRegisterUser({ age: formatAge, username: formatUsername });
    setUserInputs(userInputsInitial);
  };

  const validateRegisterUser = () => {
    if (formatUsername.trim().length === 0) return "Username can not be empty!";

    if (formatAge < 18) return "You must be at least 18 year old to register!";

    const doesUsernameExist = !!props.registeredUsers.find(
      (user) => user.username === formatUsername
    );
    if (doesUsernameExist) return "Username is already registered";

    return "";
  };

  return (
    <Card>
      <form
        onSubmit={registerUserHandler}
        className={styles["register-user-form"]}
      >
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
