// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.module.css'; // 스타일링 추가

function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // 이전 주로 이동
  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // 다음 주로 이동
  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  return (
    <div className="custom-calendar-container">
      <h2>
        {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
      </h2>
      <div className="calendar-navigation">
        <button onClick={goToPreviousWeek}>{'< 이전 주'}</button>
        <span>
          {currentDate.toLocaleDateString()} ~{' '}
          {new Date(
            currentDate.getTime() + 6 * 24 * 60 * 60 * 1000,
          ).toLocaleDateString()}
        </span>
        <button onClick={goToNextWeek}>{'다음 주 >'}</button>
      </div>

      <Calendar
        activeStartDate={currentDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setCurrentDate(activeStartDate as Date)
        }
        value={currentDate}
        minDate={currentDate} // 시작 날짜 설정
        maxDate={new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000)} // 1주일 후 설정
        showNeighboringMonth={false} // 이웃하는 월 날짜 감추기
        tileDisabled={({ date }) =>
          date < currentDate ||
          date > new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000)
        }
      />
    </div>
  );
}

export default CustomCalendar;
