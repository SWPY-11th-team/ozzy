"use client";

import React, { useState } from "react";
import { Popup } from "../components/popUp/popUp";
import styles from "./diaryInput.module.css";
import { useRouter } from "next/navigation";

export default function DiaryInput() {
  const router = useRouter();
  const [title, setTitle] = useState<string>(""); 
  const [content, setContent] = useState<string>(""); 
  const [isPopupVisible, setPopupVisible] = useState(false); // 팝업 상태 관리
  const maxContentLength = 4000; 

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(utc + koreaTimeDiff);
  const today = `${koreaTime.getFullYear()}-${koreaTime.getMonth() + 1}-${koreaTime.getDate()}`;

  const handleSaveClick = () => {
    setPopupVisible(true); // 팝업 표시
  };

  const handleCancel = () => {
    setPopupVisible(false); // 팝업 숨기기
  };

  const handleConfirm = async () => {
    setPopupVisible(false);
    const result = await saveDiary(today);
    const addEmotionSeq = result.body.addEmotionSeq;
    const diaryDate = result.body.diaryDate;

    router.push(`/emotionSelect?addEmotionSeq=${addEmotionSeq}&diaryDate=${diaryDate}`);
  };

  const token = localStorage.getItem('accessToken');

  const saveDiary = async (diaryDate: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/diary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify({
          title,
          content,
          diaryDate,
        }),
      })

      if (response.status !== 201) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
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
