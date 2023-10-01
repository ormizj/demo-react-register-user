import React from "react";

import styles from "./RegisterUserList.module.scss";
import Card from "components/Card/Card";

const RegisterUserList = (props) => {
  return (
    <Card>
      <ol>
        {props.registeredUsers.map(({ username, age }) => (
          <li key={username} className={styles["registered-user"]}>
            {username} ({age} year old)
          </li>
        ))}
      </ol>
    </Card>
  );
};

export default RegisterUserList;
