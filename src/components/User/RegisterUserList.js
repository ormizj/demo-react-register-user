import React from "react";

import styles from "./RegisterUserList.module.scss";
import Card from "../UI/Card";

const RegisterUserList = (props) => {
  return (
    <Card>
      {/* using "ul", not "ol" because there is no sorting to the "registeredUsers" object */}
      <ul>
        {props.registeredUsers.map(({ username, age }) => (
          <li key={username} className={styles["registered-user"]}>
            {username} ({age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RegisterUserList;
