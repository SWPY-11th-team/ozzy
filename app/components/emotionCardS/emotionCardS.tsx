import React from "react";
import { emotionCardData } from "@/app/emotion-result/emotionCard";
import styles from "./emotionCardS.module.css";

interface EmotionCardSProps {
  id: string; // 감정 ID
  percentage?: number; // 퍼센트 (선택적)
}

export const EmotionCardS: React.FC<EmotionCardSProps> = ({ id, percentage }) => {
  const emotionCard = emotionCardData.find((card) => card.id === id);

  if (!emotionCard) {
    return <div className={styles.error}>Emotion Card Not Found</div>;
  }

  return (
    <div
      className={styles.card}
      style={{
        background: `linear-gradient(180deg, ${emotionCard.fill[0]} 0%, ${emotionCard.fill[1]} 100%)`,
        border: `2px solid ${emotionCard.stroke}`,
        boxShadow: emotionCard.shadow,
      }}
    >
      <img src={emotionCard.image} alt={id} className={styles.image} />
    </div>
  );
};
