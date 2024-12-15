import { useState } from 'react';
import styled from 'styled-components';
import styles from './weekCalendar.module.css';

// Styled Components
const StyledButton = styled.button<{ $journalOn?: boolean }>`
  background-color: #121212;
  font-size: 32px;
  color: ${(props) => (props.$journalOn ? 'white' : 'grey')};
  padding: 5px;
  border: none; /* border 제거 */
  cursor: pointer;
  width: 100%;
`;

const getDayOfWeek = (dayNumber: number) => {
  const week = ['월', '화', '수', '목', '금', '토', '일']; // 월요일부터 시작
  return week[dayNumber];
};

// 월요일부터 시작하는 이번 주의 날짜 반환
const getThisWeekDates = () => {
  const curr = new Date();
  const day = curr.getDay() === 0 ? 7 : curr.getDay(); // 일요일이면 7로 처리
  const monday = curr.getDate() - day + 1; // 월요일 날짜 계산
  return Array.from({ length: 7 }, (_, index) => monday + index);
};

// SingleDay 컴포넌트
const SingleDay = ({
  day,
  isJournal,
  isToday,
}: {
  day: number;
  isJournal: boolean;
  isToday: boolean;
}) => {
  const thisWeekDates = getThisWeekDates();

  return (
    <StyledButton $journalOn={isJournal}>
      <div className={isToday ? styles.todayContent : styles.dayAndDateContent}>
        <div className={styles.day}>{getDayOfWeek(day)}</div>
        <div className={styles.date}>{thisWeekDates[day]}</div>
      </div>
    </StyledButton>
  );
};

// WeekCalendar 컴포넌트
const WeekCalendar = ({ journalData }: { journalData: number[] }) => {
  const todayDay = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // 월요일 시작 기준 오늘 요일
  const sevenDays = Array.from({ length: 7 }, (_, index) => index); // [0, 1, 2, 3, 4, 5, 6]

  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#121212' }}>
      {sevenDays.map((day) => (
        <SingleDay
          key={day}
          day={day}
          isJournal={journalData[day] === 1}
          isToday={todayDay === day}
        />
      ))}
    </div>
  );
};

export default WeekCalendar;
