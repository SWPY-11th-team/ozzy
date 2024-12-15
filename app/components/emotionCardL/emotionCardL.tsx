"use client";

import React, { useEffect, useState } from "react";
import { emotionCardData } from "./emotionCard"; 
import styles from "./emotionCardL.module.css";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";

interface EmotionPercentage {
  [key: string]: number; // 감정 이름과 퍼센트
}

interface EmotionData {
  reply: string;
  emotionPercentages: EmotionPercentage[];
}

export const EmotionCardL = () => {
  const [emotionData, setEmotionData] = useState<EmotionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const token = useLocalStorage();

  const fetchEmotionData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/emotion-card/get?emotionCardId=123`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setEmotionData(result.body);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching emotion data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchEmotionData();
  }, [token]);

  const topThreeEmotions = () => {
    if (!emotionData) return [];
    const sortedEmotions = [...emotionData.emotionPercentages].sort(
      (a, b) => Object.values(b)[0] - Object.values(a)[0]
    );
    return sortedEmotions.slice(0, 3);
  };

  const emotions = topThreeEmotions();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % emotions.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? emotions.length - 1 : prev - 1
    );
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;

  const currentEmotion = emotions[currentIndex];
  const [emotionName, percentage] = Object.entries(currentEmotion)[0];

  const emotionDetails = emotionCardData.find(
    (card) => card.id === emotionName
  );

  return (
    <div
      className={styles.wrapper}
      style={{
        background: emotionDetails
          ? `linear-gradient(180deg, ${emotionDetails.fill[0]} 0%, ${emotionDetails.fill[1]} 100%)`
          : "#333",
        border: emotionDetails ? `2px solid ${emotionDetails.stroke}` : "none",
      }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>오늘의 감정카드</h1>
        <h1
          className={styles.percentage}
          style={{ color: emotionDetails?.stroke || "#FFFFFF" }} 
        >
          {percentage}%
        </h1>
      </div>

      <div className={styles.cardContainer}>
        <button onClick={handlePrev} className={styles.navButton}>
          <img src="/icons/iconLeft.svg" alt="좌로이동" width="24" height="24" />
        </button>

        <img
          src={emotionDetails?.image}
          alt={emotionDetails?.id}
          className={styles.cardImage}
        />

        <button onClick={handleNext} className={styles.navButton}>
          <img src="/icons/iconRight.svg" alt="우로이동" width="24" height="24" />
        </button>
      </div>

      <div className={styles.reply}>{emotionData?.reply}</div>
    </div>
  );
};
