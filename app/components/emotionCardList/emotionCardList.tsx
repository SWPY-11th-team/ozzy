'use client';

import React, { useEffect, useState } from 'react';
import { EmotionCardS } from '../emotionCardS/emotionCardS';
import styles from './emotionCardList.module.css';
import { emotionCardData } from '@/app/emotion-result/emotionCard';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useSearchParams } from 'next/navigation';

interface EmotionPercentage {
  [key: string]: number; // 감정 이름과 퍼센트
}

export interface EmotionData {
  reply: string;
  emotionPercentages: EmotionPercentage[];
}

export const EmotionCardList = ({
  data,
}: {
  data: EmotionData | undefined;
}) => {
  const [emotionData, setEmotionData] = useState<EmotionData | undefined>(data);

  const topThreeEmotions = () => {
    if (!emotionData) return [];
    const sortedEmotions = [...emotionData.emotionPercentages].sort(
      (a, b) => Object.values(b)[0] - Object.values(a)[0],
    );
    return sortedEmotions.slice(0, 3);
  };

  if (!emotionData) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        오늘은 {topThreeEmotions().length}개의 감정카드가 도착했어요
      </h1>
      <p className={styles.subtitle}>{emotionData.reply}</p>

      {/* 배경색이 들어간 감정 카드 리스트 */}
      <div className={styles.container}>
        <div className={styles.cardList}>
          {topThreeEmotions().map((emotion, index) => {
            const [emotionName, percentage] = Object.entries(emotion)[0];
            const emotionDetails = emotionCardData.find(
              (card) => card.id === emotionName,
            );

            if (!emotionDetails) return null;

            return (
              <div key={index} className={styles.cardItem}>
                <EmotionCardS id={emotionDetails.id} percentage={percentage} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
