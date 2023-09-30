import React from "react";

import styles from "./Modal.module.scss";
import Card from "components/Card/Card";

const Modal = (props) => {
  return (
    <div className={styles["modal"]}>
      <h3 className={styles["error-message-header"]}>Invalid Input</h3>
      <Card>
        <p>{props.message}</p>
        <div className={styles["ok-button"]}>
          <button>Okay</button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
