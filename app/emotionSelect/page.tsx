"use client";

import React, { useState } from "react";
import { emotions } from "./emotionData"; // 감정 데이터 가져오기
import { ButtonEmpty } from "../components/button/buttonEmpty";
import { Card } from "../components/card/Card";
import { Button } from "../components/button/Button";
import styles from "./emotionSelect.module.css";


export default function EmotionSelectionPage() {
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0); // 현재 감정의 인덱스

  // 현재 선택된 감정
  const currentEmotion = emotions[currentEmotionIndex];

  // 이전 감정으로 이동
  const handlePrevEmotion = () => {
    setCurrentEmotionIndex(
      (prevIndex) => (prevIndex - 1 + emotions.length) % emotions.length
    );
  };

  // 다음 감정으로 이동
  const handleNextEmotion = () => {
    setCurrentEmotionIndex(
      (prevIndex) => (prevIndex + 1) % emotions.length
    );
  };

  const handleBackClick = () => {
    console.log(`뒤로가기`);
  };
  
  return (
    <div className={styles.container}>
    
    <div className={styles.header}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <img
          src="/icons/iconBack.svg"
          alt="뒤로 가기"
          width="24"
          height="24"
          className={styles.icon}
        />
      </button>
    </div>

      {/* 상단 텍스트 */}
      <h1 className={styles.title}>일기를 쓰면서 어떤 감정을 느끼셨나요?</h1>
      <p className={styles.subtitle}>
        스스로 감정을 인식할 때 자기이해능력이 높아져요! 감정을 모르겠다면 AI가 분석해드릴게요.
      </p>

      {/* 감정 카드 */}
      <div className={styles.emotionContainer}>
        <button className={styles.arrowButton} onClick={handlePrevEmotion}>
          <img src="/icons/iconLeft.svg" alt="이전" />
        </button>
        <div className={styles.emotionCard}>
          <img src={currentEmotion.image} alt={currentEmotion.name} />
        </div>
        <button className={styles.arrowButton} onClick={handleNextEmotion}>
          <img src="/icons/iconRight.svg" alt="다음" />
        </button>
      </div>

      {/* 감정에 따른 카드 리스트 */}
      <div className={styles.cardList}>
        {currentEmotion.cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageUrl={card.image}
            bgColor={card.bgColor}
          />
        ))}
      </div>

      {/* 하단 버튼 */}
      <div className={styles.buttonContainer}>
        <ButtonEmpty
          label="건너뛸게요"
          onClick={() => console.log("건너뛰기 클릭됨")}
        />
        <Button
          label="추가할게요"
          onClick={() => console.log("추가하기 클릭됨")}
        />
      </div>
    </div>
  );
}
