'use client';

import React, { useEffect, useState } from 'react';
import styles from './diary.module.css';
import { CircleButton } from '../components/button/circleButton';
import WeekCalendar from '../components/weekCalender/weekCalendar';
import 'react-calendar/dist/Calendar.css';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchDiary } from '../api/integratedDiary';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  EmotionCardList,
  EmotionData,
} from '../components/emotionCardList/emotionCardList';
import { weeklyDiary } from '../api/weeklyDiary';
import {
  Emotion,
  SelectedEmotion,
} from '../components/selectedEmotion/selectedEmotion';
import { Button } from '../components/button/Button';
import styled from 'styled-components';
import { fetchSingleDiary } from '../api/fetchSingleDiary';
import { DiaryView } from '../components/diaryView/diaryView';

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

  const [journalData, setJournalData] = useState<number[]>([]);
  const [diaryData, setDiaryData] = useState<any>();
  const [addEmotionData, setAddEmotionData] = useState<any>();
  const [emotionCardData, setEmotionCardData] = useState<any>();

  const [showDiaryData, setShowDiaryData] = useState<boolean>(false);
  const [showNewDiaryButton, setShowNewDiaryButton] = useState<boolean>(false);
  const [showEmotionCard, setShowEmotionCard] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeeklyDiaryData = async () => {
      if (token) {
        try {
          console.log(currentDate);
          const response = await weeklyDiary(currentDate, token);
          const dates = response.body.dates;
          const currentDateObj = new Date(currentDate);
          console.log('Current Date:', currentDateObj);

          const sundayDate = new Date(currentDateObj);
          sundayDate.setDate(
            currentDateObj.getDate() - currentDateObj.getDay(),
          );

          const weekArray = Array(7)
            .fill(0)
            .map((_, index) => {
              const day = new Date(sundayDate);
              day.setDate(sundayDate.getDate() - 6 + index); // 일요일부터 역순으로 계산
              const formattedDate = day.toISOString().split('T')[0];
              return dates.includes(formattedDate) ? 1 : 0;
            });

          setJournalData(weekArray);
        } catch (error) {
          // console.error('Error fetching weekly diary:', error);
        }
      }
    };

    fetchWeeklyDiaryData();
  }, [token]);

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
            setShowDiaryData(false);
            setShowEmotionCard(false);
          } else {
            setShowEmotionCard(true);
            setShowDiaryData(false);
            setShowNewDiaryButton(false);
          }
        } catch (error) {
          // console.error('Error fetching diary:', error);
        }
      }
    };

    fetchDiaryData();
  }, [currentDate, token]);

  const viewDiaryHandler = async () => {
    const diary = await fetchSingleDiary(currentDate, token);
    setDiaryData(diary.body);
    setShowDiaryData(true);
    setShowEmotionCard(false);
    setShowNewDiaryButton(false);
  };

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
        journalData={journalData}
        dateHandler={setCurrentDate}
        currentDate={currentDate}
      />

      {/* <EmotionCardList /> */}

      {showDiaryData && <DiaryView data={diaryData} />}

      {showEmotionCard && (
        <div style={{ color: 'white', width: '100%', height: '100%' }}>
          <EmotionCardList data={emotionCardData} />
          <SelectedEmotion
            data={addEmotionData}
            addEmotionRouter={() =>
              router.push(
                `/emotionSelect?addEmotionSeq=${addEmotionData.addEmotionSeq}&diaryDate=${currentDate}`,
              )
            }
          />
          <ViewDiaryButton onClick={viewDiaryHandler}>
            일기 보기
          </ViewDiaryButton>
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

const ViewDiaryButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #0fe597;
  color: black;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 60px;
  cursor: pointer;
`;
