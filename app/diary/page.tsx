'use client';

import React, { useEffect, useState } from 'react';
import styles from './diary.module.css';
import { CircleButton } from '../components/button/circleButton';
import WeekCalendar from '../components/weekCalender/weekCalendar';
import 'react-calendar/dist/Calendar.css';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchDiary } from '../api/diary';
import { useRouter } from 'next/navigation';
import { EmotionCardList } from '../components/emotionCardList/emotionCardList';

const sampleJournalData = [0, 1, 0, 0, 0, 0, 0];

export default function Diary() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(utc + koreaTimeDiff);
  const today = `${koreaTime.getFullYear()}-${koreaTime.getMonth() + 1}-${koreaTime.getDate()}`;
  const [currentDate, setCurrentDate] = useState<string>(today);
  const currentYear = new Date(currentDate).getFullYear();
  const currentMonth = new Date(currentDate).getMonth() + 1;

  const token = useLocalStorage();
  const router = useRouter();

  const [showNewDiaryButton, setShowNewDiaryButton] = useState<boolean>(false);
  const [showEmotionCard, setShowEmotionCard] = useState<boolean>(false);
  const [addEmotionData, setAddEmotionData] = useState();
  const [emotionCardData, setEmotionCardData] = useState();

  useEffect(() => {
    setShowEmotionCard(false);
    setShowNewDiaryButton(false);

    const fetchDiaryData = async () => {
      if (token) {
        try {
          const params = new URLSearchParams(window.location.search);
          params.set('date', currentDate);
          window.history.replaceState(
            {},
            '',
            `${window.location.pathname}?${params.toString()}`,
          );

          const data = await fetchDiary(
            currentDate,
            token,
            setAddEmotionData,
            setEmotionCardData,
          ); // API 호출

          if (data === null) {
            setShowNewDiaryButton(true);
          } else {
            setShowEmotionCard(true);
          }
        } catch (error) {
          // console.error('Error fetching diary:', error);
        }
      }
    };

    fetchDiaryData();
  }, [currentDate, token]);

  const getEmotionCard = async () => {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.year}>{`${currentYear}년`}</div>
          <div className={styles.month}>{`${currentMonth}월`}</div>
        </div>
        <img
          src="/icons/iconMypage.svg" // 로고 이미지 경로
          alt="마이페이지"
          className={styles.logo}
          onClick={() => {
            router.push('/profile');
          }}
        />
      </div>
      <WeekCalendar
        journalData={sampleJournalData}
        dateHandler={setCurrentDate}
        currentDate={currentDate}
      />

      <EmotionCardList />

      {showEmotionCard && (
        <div style={{ color: 'white' }}>
          <pre>Add Emotion Data: {JSON.stringify(addEmotionData, null, 2)}</pre>
          <pre>
            Emotion Card Data: {JSON.stringify(emotionCardData, null, 2)}
          </pre>
        </div>
      )}

      {showNewDiaryButton && (
        <div className={styles.floatButtonWrapper}>
          <CircleButton
            onClick={() => router.push(`/diaryInput?diaryDate=${currentDate}`)}
          />
          <p>일기 작성하기</p>
        </div>
      )}
    </div>
  );
}
