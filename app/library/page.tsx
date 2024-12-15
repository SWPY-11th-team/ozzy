'use client';

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import 'react-calendar/dist/Calendar.css';
import styles from './library.module.css';
import NavigationBar from '../components/NavigationBar/Nav';
import EmotionDonutChart from '../emotionDonut/pie';

// 감정 데이터 타입 정의
type EmotionData = {
  date: string; // 날짜 (ISO 형식)
  emotion: string; // 감정 이름
  color: string; // 감정 색상
};

type ServerEmotionData = {
  date: string; // 날짜 (ISO 형식)
  topEmotions: { [emotion: string]: number }[]; // 감정 이름과 값의 배열
};

type ServerMonthlyData = {
  month: string;
  emotions: { [emotion: string]: number };
};

type BubbleEmotionData = {
  name: string;
  percentage: number;
  color: string;
};

// 감정에 따른 색상 매핑
const emotionColors: { [key: string]: string } = {
  HAPPY: '#FCDC4C',
  SAD: '#006AF4',
  ANGRY: '#FF6666',
  FEARFUL: '#CB7C41',
  SURPRISED: '#732AB3',
  DISGUSTED: '#FF8DB5',
  NEUTRALITY: '#60F04A',
};

// 감정 이름 매핑
const emotionNames: { [key: string]: string } = {
  NEUTRALITY: '중립',
  FEARFUL: '공포',
  HAPPY: '기쁨',
  SURPRISED: '놀람',
  SAD: '슬픔',
  DISGUSTED: '혐오',
  ANGRY: '분노',
};

// 서버 데이터 변환 함수
const transformEmotionData = (
  serverData: ServerEmotionData[],
): EmotionData[] => {
  const transformed: EmotionData[] = [];

  serverData.forEach((entry) => {
    entry.topEmotions.forEach((emotionObj) => {
      const [emotion, value] = Object.entries(emotionObj)[0]; // 감정과 값을 추출
      transformed.push({
        date: entry.date,
        emotion: emotion, // 감정 이름
        color: emotionColors[emotion] || '#FFFFFF', // 매핑되지 않은 감정은 기본 색상
      });
    });
  });

  // 날짜 순서대로 정렬 (오름차순)
  transformed.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return transformed;
};

// 버블 데이터 변환 함수
const transformServerDataToBubble = (
  serverData: ServerMonthlyData,
): BubbleEmotionData[] => {
  const totalEmotions = Object.values(serverData.emotions).reduce(
    (sum, value) => sum + value,
    0,
  ); // 총 감정 값 계산

  if (totalEmotions === 0) {
    console.warn('감정 데이터가 없습니다.');
    return [];
  }

  return Object.entries(serverData.emotions).map(([key, value]) => {
    const percentage = Math.round((value / totalEmotions) * 100); // 퍼센티지 계산
    return {
      name: emotionNames[key] || key, // 감정 이름 변환
      percentage: percentage,
      color: emotionColors[key] || '#CCCCCC', // 색상 매핑
    };
  });
};

// 날짜 타일에 감정 표시

const EmotionCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [emotionData, setEmotionData] = useState<EmotionData[]>([]);
  const [bubbleData, setBubbleData] = useState<BubbleEmotionData[]>([]);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const handleDateChange = (
    value: any,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (value instanceof Date) {
      setCurrentDate(value); // 선택된 날짜를 상태로 설정
    }
  };

  const tileContent = ({ date }: { date: Date }) => {
    // const dateString = date.toISOString().split('T')[0];
    const dateString = date.toLocaleDateString('en-CA'); // 날짜 형식 수정

    const emotionsForDate = emotionData.filter(
      (emo) => emo.date === dateString,
    );

    if (emotionsForDate.length > 0) {
      return (
        <div className={styles.tileContentContainer}>
          {emotionsForDate.map((emo, index) => (
            <span
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
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

  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchEmotionData = async (): Promise<any> => {
    const token = localStorage.getItem('accessToken');

    try {
      const response = await fetch(
        `${backendUrl}/api/emotion-card/library?month=${currentYear}-${currentMonth}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch emotion data');
      }
      return await response.json();
    } catch (error) {
      console.error('Emotion data fetching error:', error);
      return []; // 오류 시 빈 배열 반환
    }
  };

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        1,
      );
      return newDate;
    });
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        1,
      );
      return newDate;
    });
  };

  useEffect(() => {
    const loadEmotions = async () => {
      const data = await fetchEmotionData();
      const emotionsOnServer = data.body.monthlyEmotions;
      const emotionsOnClient = transformEmotionData(emotionsOnServer);
      setEmotionData(emotionsOnClient);

      const bubbleData = transformServerDataToBubble(
        data.body.overallEmotionStats,
      );
      setBubbleData(bubbleData);
    };
    loadEmotions();
  }, []);

  return (
    <div className={styles.calendarContainer}>
      <NavigationBar></NavigationBar>
      <div className={styles.year}>{`${currentYear}년`}</div>
      <div className={styles.month}>{`${currentMonth}월`}</div>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <button onClick={handlePrevMonth} className={styles.iconBtn}>
          <img src="/icons/iconLeft.svg" alt="지난달" className={styles.icon} />
        </button>

        <button onClick={handleNextMonth} className={styles.iconBtn}>
          <img
            src="/icons/iconRight.svg"
            alt="다음달"
            className={styles.icon}
          />
        </button>
      </div>
      <Calendar
        className={styles.reactCalendar}
        tileClassName={styles.reactCalendarTile}
        showNeighboringMonth={false}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
        value={currentDate}
        locale="ko-KR"
        tileContent={tileContent}
        showNavigation={false}
      />
      <h2>이번 달의 감정을 모아봤어요</h2>
      <EmotionDonutChart emotions={bubbleData} />
    </div>
  );
};

export default EmotionCalendar;
