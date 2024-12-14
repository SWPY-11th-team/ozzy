"use client";

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  className?: string; // 클래스 이름을 전달받아 추가적인 스타일을 적용할 수 있도록 함
  isActive?: boolean;
  onClick?: () => void; // 클릭 시 실행될 함수를 props로 전달받음
}

export const Button = ({ label, className, isActive = true, onClick}: ButtonProps) => {
  const handleClick = () => {
    console.log("Button Clicked!");
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      type="submit" 
      className={`${styles.button} ${className} ${!isActive ? styles.inactive : ''}`} 
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
