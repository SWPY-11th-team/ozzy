'use client';

import React, { useEffect, useState } from 'react';
import { emotionCardData } from './emotionCard';
import styles from './emotionCardL.module.css';

interface EmotionPercentage {
  [key: string]: number;
}

interface EmotionData {
  reply: string;
  emotionPercentages: EmotionPercentage[];
}

export const EmotionCardL = ({
  emotionData,
}: {
  emotionData: EmotionData | null;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topThreeEmotions = () => {
    if (
      !emotionData ||
      !emotionData.emotionPercentages ||
      emotionData.emotionPercentages.length === 0
    )
      return [];
    const sortedEmotions = [...emotionData.emotionPercentages].sort(
      (a: EmotionPercentage, b: EmotionPercentage) =>
        Object.values(b)[0] - Object.values(a)[0],
    );
    return sortedEmotions.slice(0, 3);
  };

  const emotions = topThreeEmotions();

  console.log(emotions);

  const handleNext = () => {
    if (emotions.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % emotions.length);
    }
  };

  const handlePrev = () => {
    if (emotions.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? emotions.length - 1 : prev - 1));
    }
  };

  const currentEmotion = emotions.length > 0 ? emotions[currentIndex] : null;

  const [emotionName, percentage] = currentEmotion
    ? Object.entries(currentEmotion)[0]
    : ['', 0];

  const emotionDetails = emotionCardData.find(
    (card) => card.id === emotionName,
  );

  return (
    <div
      className={styles.wrapper}
      style={{
        background: emotionDetails
          ? `linear-gradient(180deg, ${emotionDetails.fill[0]} 0%, ${emotionDetails.fill[1]} 100%)`
          : '#333',
        border: emotionDetails ? `2px solid ${emotionDetails.stroke}` : 'none',
      }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>오늘의 감정카드</h1>
        <h1
          className={styles.percentage}
          style={{ color: emotionDetails?.stroke || '#FFFFFF' }}
        >
          {Math.floor(percentage)}%
        </h1>
      </div>

      <div className={styles.cardContainer}>
        <button onClick={handlePrev} className={styles.navButton}>
          <img
            src="/icons/iconLeft.svg"
            alt="좌로이동"
            width="24"
            height="24"
          />
        </button>

        <img
          src={emotionDetails?.image}
          alt={emotionDetails?.id}
          className={styles.cardImage}
        />

        <button onClick={handleNext} className={styles.navButton}>
          <img
            src="/icons/iconRight.svg"
            alt="우로이동"
            width="24"
            height="24"
          />
        </button>
      </div>

      <div className={styles.reply}>
        {emotionData?.reply || 'No response available'}
      </div>
    </div>
  );
};
