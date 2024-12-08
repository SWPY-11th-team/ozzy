"use client";

import React, { useState } from "react";
import { Popup } from "../components/popUp/popUp";
import styles from "./diaryInput.module.css";

export default function DiaryInput() {
  const [title, setTitle] = useState<string>(""); 
  const [content, setContent] = useState<string>(""); 
  const [isPopupVisible, setPopupVisible] = useState(false); // 팝업 상태 관리
  const maxContentLength = 4000; 
  const today = new Date().toISOString().split("T")[0]; 

  const handleSaveClick = () => {
    setPopupVisible(true); // 팝업 표시
  };

  const handleCancel = () => {
    setPopupVisible(false); // 팝업 숨기기
  };

  const handleConfirm = () => {
    setPopupVisible(false);
    console.log("일기 저장 완료!"); // 저장 동작
  };


  return (
    <div className={styles.container}>
      {/* 상단 헤더 */}
      <header className={styles.header}>
        <img src="/icons/iconLeft.svg" alt="뒤로가기" className={styles.icon} />
        <h1 className={styles.date}>{today.replace(/-/g, ". ")}</h1>
        <img src="/icons/iconCheck.svg" 
            alt="저장" 
            className={styles.icon} 
            onClick={handleSaveClick}
        />
      </header>

        {/* 재사용 가능한 팝업 */}
        <Popup
            isVisible={isPopupVisible}
            message="일기를 저장할까요?"
            confirmLabel="네!"
            cancelLabel="수정할래요"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
      />

      {/* 제목 입력 */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
          placeholder="제목"
          spellCheck='false'
        />
      </div>

      {/* 본문 입력 */}
      <div className={styles.contentContainer}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={maxContentLength}
          className={styles.contentInput}
          placeholder="오늘 하루는 어떠셨나요?"
          spellCheck='false'
        />
        <div className={styles.charCount}>
          {`${content.length}/${maxContentLength}`}
        </div>
      </div>
    </div>
  );
}
