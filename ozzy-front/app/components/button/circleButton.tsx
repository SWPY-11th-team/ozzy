"use client";

import React from "react";
import styles from "./circleButton.module.css";

interface CircleButtonProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const CircleButton = ({ isActive = true, onClick }: CircleButtonProps) => {
  return (
    <button 
      className={`${styles.circleButton} ${!isActive ? styles.inactive : ''}`} 
      onClick={onClick}
    >
      <div className={styles.plusSign}>+</div>
    </button>
  );
};
