"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

import "react-calendar/dist/Calendar.css";
import styles from "./library.module.css"; 
import EmotionBubbles from "../emotionBubble/emotionBubble";

// 감정 데이터 타입 정의
type EmotionData = {
  date: string; // 날짜 (ISO 형식)
  emotion: string; // 감정 이름
  color: string; // 감정 색상
};

// 샘플 데이터
const emotionData: EmotionData[] = [
  { date: "2024-12-01", emotion: "기쁨", color: "#FFDD00" },
  { date: "2024-12-01", emotion: "공포", color: "#FF5678" },
  { date: "2024-12-02", emotion: "슬픔", color: "#5B75FF" },
  { date: "2024-12-15", emotion: "분노", color: "#00D084" },
  { date: "2024-12-23", emotion: "기쁨", color: "#FFDD00" },
  { date: "2024-12-23", emotion: "슬픔", color: "#5B75FF" },
];

// 날짜 타일에 감정 표시
const tileContent = ({ date }: { date: Date }) => {
  const dateString = date.toISOString().split("T")[0];
  const emotionsForDate = emotionData.filter((emo) => emo.date === dateString);

  if (emotionsForDate.length > 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "3px" }}>
        {emotionsForDate.map((emo, index) => (
          <span
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: emo.color,
            }}
            title={emo.emotion} // 마우스오버 시 감정 이름 표시
          ></span>
        ))}
      </div>
    );
  }

  return null;
};

const EmotionCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handleDateChange = (value: any, event: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setCurrentDate(value); // 선택된 날짜를 상태로 설정
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <h2>12월</h2>
      <Calendar
        className={styles.reactCalendar}
        tileClassName={styles.reactCalendarTile}
        showNeighboringMonth={false} // 이전/다음 달 날짜 숨기기
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
        value={currentDate}
        locale="ko-KR"
        tileContent={tileContent}
        showNavigation={false}
      />
      <EmotionBubbles></EmotionBubbles>
    </div>
  );
};

export default EmotionCalendar;
