"use client";

import React, { useEffect, useState } from "react";
import { EmotionCardS } from "../emotionCardS/emotionCardS";
import styles from "./emotionCardList.module.css";
import { emotionCardData } from "@/app/emotion-result/emotionCard";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useSearchParams } from "next/navigation";

interface EmotionPercentage {
  [key: string]: number; // 감정 이름과 퍼센트
}

interface EmotionData {
  reply: string;
  emotionPercentages: EmotionPercentage[];
}

export const EmotionCardList = () => {
  const [emotionData, setEmotionData] = useState<EmotionData | null>(null);
  const token = useLocalStorage(); // 로컬 스토리지에서 토큰 가져오기
  const searchParams = useSearchParams();
  const emotionCardId = searchParams.get("emotionCardId"); // Query param으로 emotionCardId 받기

  useEffect(() => {
    const fetchEmotionData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/emotion-card/get?emotionCardId=${emotionCardId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `${token}`
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch emotion data");
        }

        const result = await response.json();
        setEmotionData(result.body); // API에서 받은 body 저장
      } catch (error) {
        console.error("Error fetching emotion data:", error);
      }
    };

    if (token && emotionCardId) {
      fetchEmotionData();
    }
  }, [token, emotionCardId]);

  const topThreeEmotions = () => {
    if (!emotionData) return [];
    const sortedEmotions = [...emotionData.emotionPercentages].sort(
      (a, b) => Object.values(b)[0] - Object.values(a)[0]
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
              (card) => card.id === emotionName
            );

            if (!emotionDetails) return null;

            return (
              <div key={index} className={styles.cardItem}>
                <EmotionCardS
                  id={emotionDetails.id}
                  percentage={percentage}
                />
              </div>
            );
          })}
        </div>
        <button className={styles.button} onClick={() => console.log("Card received!")}>
          감정분석 카드 받기
        </button>
      </div>
    </div>
  );
};
