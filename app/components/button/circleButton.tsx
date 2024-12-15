'use client';

import React from 'react';
import styles from './circleButton.module.css';

interface CircleButtonProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const CircleButton = ({
  isActive = true,
  onClick,
}: CircleButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.circleButton} ${!isActive ? styles.inactive : ''}`}
      onClick={handleClick}
    >
      <div className={styles.plusSign}>+</div>
    </button>
  );
};
