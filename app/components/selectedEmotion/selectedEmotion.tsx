"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";
import { emotions } from "@/app/emotionSelect/emotionData"; 
import styles from "./selectedEmotion.module.css";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

// 감정 데이터 타입
interface Emotion {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

export const SelectedEmotion = () => {
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);
  const token = useLocalStorage();
  const router = useRouter();

  // 감정 데이터를 가져오는 함수
//   useEffect(() => {
//     const fetchEmotions = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/add-emotion?addEmotionId=82`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               'Authorization': `${token}`
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch emotions");

//         const result = await response.json();

//         // API에서 받은 emotions 문자열을 배열로 변환 후 emotionData.ts에서 매칭
//         const emotionList = result.body.emotions.split(",").map((emotionTitle: string) => {
//           const matchedEmotion = emotions
//             .flatMap((emotionGroup) => emotionGroup.cards) // 모든 카드 데이터를 평탄화
//             .find((card) => card.title.trim() === emotionTitle.trim());

//           return matchedEmotion || null;
//         });

//         // 유효한 감정 카드만 상태에 저장
//         setSelectedEmotions(emotionList.filter((emotion: any) => emotion !== null) as Emotion[]);
//       } catch (error) {
//         console.error("Error fetching emotion data:", error);
//       }
//     };

//     if (token) fetchEmotions();
//   }, [token]);
const testData = {
    body: {
      emotions: "자유롭다, 고립되다, 긴장하다, 조롱당하다", // API로부터 가져올 데이터 대신 사용
    },
  };
  useEffect(() => {
    const emotionList = testData.body.emotions.split(",").map((emotionTitle: string) => {
      const matchedEmotion = emotions
        .flatMap((emotionGroup) => emotionGroup.cards) // 모든 카드 데이터를 평탄화
        .find((card) => card.title.trim() === emotionTitle.trim());

      return matchedEmotion || null;
    });

    // 유효한 감정 카드만 상태에 저장
    setSelectedEmotions(emotionList.filter((emotion) => emotion !== null) as Emotion[]);
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>직접 기록한 감정</h1>
        <button className={styles.plusButton}>
            <img src="/icons/iconPlus.svg" 
                 alt="추가" 
                 width="24" 
                 height="24"
                 onClick={()=>router.push('/emotionSelect')} />
        </button>
      </div>
      <div className={styles.cardContainer}>
        {selectedEmotions.map((emotion) => (
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
