"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./healing.module.css";

const emotions = [
    { id: "joy", image: "/emotionOne/emotionJoyOne.svg" },
    { id: "sad", image: "/emotionOne/emotionSadOne.svg" },
    { id: "anger", image: "/emotionOne/emotionAngerOne.svg" },
    { id: "bad", image: "/emotionOne/emotionBadOne.svg" },
    { id: "fearful", image: "/emotionOne/emotionFearfulOne.svg" },
    { id: "surprised", image: "/emotionOne/emotionSurpriseOne.svg" },
    { id: "neutral", image: "/emotionOne/emotionNeutralOne.svg" },
];

const HealingPage = () => {
  const router = useRouter();

  // 감정을 클릭했을 때 감정 ID를 기반으로 페이지 이동
  const handleEmotionClick = (id: string) => {
    router.push(`/healing/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>돌보고 싶은 감정을 선택해주세요</h1>
      <div className={styles.emotionGrid}>
        {emotions.map((emotion) => (
          <div
            key={emotion.id}
            className={styles.emotionCard}
            onClick={() => handleEmotionClick(emotion.id)}
          >
            <img
              src={emotion.image}
              alt={`Emotion ${emotion.id}`}
              className={styles.emotionImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealingPage;
