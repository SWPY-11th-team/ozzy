import { useState } from 'react';
import styled from 'styled-components';
import styles from './weekCalendar.module.css';

// Styled Components
const StyledButton = styled.button<{
  $journalOn?: boolean;
  $selected?: boolean;
}>`
  background-color: #121212;
  font-size: 32px;
  color: ${(props) => (props.$journalOn ? 'white' : 'grey')};
  padding: 5px;
  box-sizing: border-box;
  border: ${(props) => (props.$selected ? '1px solid #0FE597' : 'none')};
  border-radius: ${(props) => (props.$selected ? '4rem' : 'none')};
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
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(curr);
    date.setDate(monday + index);
    return date;
  });
};

// SingleDay 컴포넌트
export const SingleDay = ({
  day,
  isJournal,
  isSelected,
  date,
  onClick,
}: {
  day: number;
  isJournal?: boolean;
  isSelected: boolean;
  date: string;
  onClick: (date: string) => void;
}) => {
  return (
    <StyledButton
      $journalOn={isJournal}
      $selected={isSelected}
      onClick={() => onClick(date)}
    >
      <div className={styles.dayAndDateContent}>
        <div className={styles.day}>{getDayOfWeek(day)}</div>
        <div className={styles.date}>{new Date(date).getDate()}</div>
      </div>
    </StyledButton>
  );
};

// WeekCalendar 컴포넌트
const WeekCalendar = ({
  journalData,
  dateHandler,
  currentDate,
}: {
  journalData: number[];
  dateHandler: React.Dispatch<React.SetStateAction<string>>;
  currentDate: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(currentDate);
  const thisWeekDates = getThisWeekDates().map(
    (date) => date.toISOString().split('T')[0],
  ); // 이번 주 날짜 배열 (string 형식)

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    dateHandler(date);
  };

  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#121212' }}>
      {thisWeekDates.map((date, index) => (
        <SingleDay
          key={index}
          day={index}
          isJournal={journalData[index] === 1}
          isSelected={selectedDate === date}
          date={date}
          onClick={handleDateClick} // 클릭 시 handleDateClick 호출
        />
      ))}
    </div>
  );
};

export default WeekCalendar;
