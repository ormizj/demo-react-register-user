import React from "react";

import styles from "./Modal.module.scss";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className={styles["modal"]}>
      <h3 className={styles["error-message-header"]}>Invalid Input</h3>
      <Card className={styles["modal-card"]}>
        <p>{props.errMsg}</p>
        <div className={styles["ok-button"]}>
          <button onClick={props.onConfirm}>Okay</button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
