'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { emotions } from '@/app/emotionSelect/emotionData';
import styles from './selectedEmotion.module.css';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';

// 감정 데이터 타입
export interface Emotion {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

export const SelectedEmotion = ({
  data,
  addEmotionRouter,
}: {
  data: any;
  addEmotionRouter: () => void;
}) => {
  const [selectedEmotions, setSelectedEmotions] = useState<
    Emotion[] | undefined
  >();
  console.log('addemotion: ', data);
  const router = useRouter();

  const testData = {
    body: {
      emotions: data.emotions,
    },
  };
  useEffect(() => {
    const emotionList =
      testData.body.emotions === null
        ? null
        : testData.body.emotions.split(',').map((emotionTitle: string) => {
            const matchedEmotion = emotions
              .flatMap((emotionGroup) => emotionGroup.cards) // 모든 카드 데이터를 평탄화
              .find((card) => card.title.trim() === emotionTitle.trim());

            return matchedEmotion || null;
          });

    // 유효한 감정 카드만 상태에 저장
    setSelectedEmotions(
      emotionList
        ? (emotionList.filter((emotion: any) => emotion !== null) as Emotion[])
        : undefined,
    );
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>직접 기록한 감정</h1>
        <button className={styles.plusButton}>
          <img
            src="/icons/iconPlus.svg"
            alt="추가"
            width="24"
            height="24"
            onClick={addEmotionRouter}
          />
        </button>
      </div>
      <div className={styles.cardContainer}>
        {selectedEmotions?.map((emotion) => (
          <Card
            key={emotion.id}
            id={emotion.id}
            title={emotion.title}
            imageUrl={emotion.image}
            bgColor={emotion.bgColor}
            isSelected={false}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
