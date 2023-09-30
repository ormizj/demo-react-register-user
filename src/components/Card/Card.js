import React from "react";

import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <section className={`${styles.card} ${props.className ?? ""}`}>
      <div>{props.children}</div>
    </section>
  );
};

export default Card;
