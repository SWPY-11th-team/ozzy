import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  bgColor?: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export const Card = ({ id, title, imageUrl, bgColor, isSelected, onClick }: CardProps) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      style={{ "--bgColor": bgColor } as React.CSSProperties} // CSS 변수로 색상 전달
      onClick={() => onClick(id)}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};
