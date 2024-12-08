import { useState } from "react";
import styles from "./Card.module.css";

export const Card = (props: any) => {
    var cardStyle = {
        backgroundColor: props.bgColor,
    }
  return (
    <div>
      <div className={styles.card} style={cardStyle}>
        <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{props.title}</div>
            <img src={props.imageUrl} alt={props.title} />
        </div>
      </div>
    </div>
  );
};
