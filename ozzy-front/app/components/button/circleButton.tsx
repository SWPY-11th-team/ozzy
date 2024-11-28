"use client";

import React from "react";
import styles from "./circleButton.module.css";

interface CircleButtonProps {
  onClick?: () => void;
}

export const CircleButton = ({ onClick }: CircleButtonProps) => {
  return (
    <button className={`${styles.circleButton}`} onClick={onClick}>
      <div className={styles.plusSign}>+</div>
    </button>
  );
};
