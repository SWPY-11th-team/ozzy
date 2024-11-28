"use client";

import React from "react";
import styles from "./Button.module.css";

interface ButtonDisabledProps {
  label: string;
  className?: string; // 클래스 이름을 전달받아 추가적인 스타일을 적용할 수 있도록 함
}

export const ButtonDisabled = ({ label, className }: ButtonDisabledProps) => {
  return (
    <button type="button" className={`${styles.button} ${className}`} style={{ backgroundColor: '#b0b0b0', color:'white', pointerEvents: 'none' }}>
      {label}
    </button>
  );
};
