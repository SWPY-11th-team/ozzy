"use client";

import React, { useState } from "react";
import { emotions } from "./emotionData"; // 감정 데이터 가져오기
import { ButtonEmpty } from "../components/button/buttonEmpty";
import { Card } from "../components/card/Card";
import { Button } from "../components/button/Button";
import { RecordPopup } from "../components/registerPopUp/registerPopUp";
import styles from "./emotionSelect.module.css"

export default function EmotionSelectionPage() {
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0); // 현재 감정의 인덱스
  const [selectedCards, setSelectedCards] = useState<string[]>([]); // 카드 타이틀을 저장
  const [customEmotion, setCustomEmotion] = useState<string>("");

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

  const handleCardClick = (id: number, title: string) => {
    setSelectedCards((prev) => {
      if (prev.includes(title)) {
        return prev.filter((cardTitle) => cardTitle !== title); // 타이틀로 선택 해제
      } else if (prev.length < 4) {
        return [...prev, title]; // 최대 4개까지 추가
      }
      return prev; // 최대 4개 초과 시 추가하지 않음
    });
  };
  

  // 선택 해제 (X 버튼 클릭)
  const handleRemoveSelection = (title: string) => {
    setSelectedCards((prev) => prev.filter((cardTitle) => cardTitle !== title));
  };

  // 직접 입력 텍스트
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomEmotion(event.target.value);
  };

  // 엔터 키 입력 처리
  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && customEmotion.trim() && selectedCards.length < 4) {
      setSelectedCards((prev) => [...prev, customEmotion.trim()]); // 입력된 값 추가
      setCustomEmotion(""); // 입력 필드 초기화
    }
  };
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [diaryCount, setDiaryCount] = useState(1); // 일기 입력 개수

  const handleOpenPopup = () => setIsPopupVisible(true);
  const handleClosePopup = () => setIsPopupVisible(false);

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
      <h1 className={styles.title}>일기를 쓰면서<br></br>어떤 감정을 느끼셨나요?</h1>
      <p className={styles.subtitle}>
        스스로 감정을 인식할 때 자기이해능력이 높아져요!<br></br>
        감정을 모르겠다면 AI가 분석해드릴게요.
      </p>

      {/* 감정 카드 */}
      <div className={styles.emotionContainer}>
        <button className={styles.arrowButton} onClick={handlePrevEmotion}>
          <img src="/icons/iconLeft.svg"
               alt="이전" 
               width="24"
               height="24"
               />
        </button>
        <div className={styles.emotionCard}>
          <img src={currentEmotion.image} alt={currentEmotion.name} />
        </div>
        <button className={styles.arrowButton} onClick={handleNextEmotion}>
          <img src="/icons/iconRight.svg" 
               alt="다음" 
               width="24"
               height="24"
               />
        </button>
      </div>
      
      {/* 감정에 따른 카드 리스트 */}
      <div className={styles.cardList}>
        {currentEmotion.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            imageUrl={card.image}
            bgColor={card.bgColor}
            isSelected={selectedCards.includes(card.title)} // 타이틀 기반으로 선택 상태 확인
            onClick={() => handleCardClick(card.id, card.title)} // ID와 타이틀 전달
          />        
        ))}
      </div>
      
      <span className={styles.selectionCount}>{selectedCards.length}/4</span>

      {/* 선택된 카드 */}
      <div className={styles.selectedEmotions}>
        {selectedCards.map((title) => (
          <div key={title} className={styles.selectedEmotion}>
            <span>{title}</span>
            <button
              className={styles.removeButton}
              onClick={() => handleRemoveSelection(title)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      {/* 직접 입력 */}
      <input
        type="text"
        placeholder="직접 입력할래요"
        value={customEmotion}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        className={styles.customInput}
      />


{/* 하단 버튼 */}
<div className={styles.buttonContainer}>
        <ButtonEmpty
          label="건너뛸게요"
          onClick={handleOpenPopup} // 팝업 열기
        />
        <Button
          label="추가할게요"
          onClick={handleOpenPopup} // 팝업 열기
        />
      </div>

      {/* 팝업 */}
      {isPopupVisible && (
        <RecordPopup diaryCount={diaryCount} onClose={handleClosePopup} />
      )}
    </div>
  );
}
