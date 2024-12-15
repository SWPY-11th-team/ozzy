'use client';

import React, { useState } from 'react';

import WeekCalendar from '../components/weekCalender/weekCalendar';
import NavigationBar from '../components/NavigationBar/Nav';
import styles from './emotion-result.module.css';
import { useRouter } from 'next/navigation';
import { EmotionCardList } from '../components/emotionCardList/emotionCardList';
import { EmotionCardS } from '../components/emotionCardS/emotionCardS';
import { SelectedEmotion } from '../components/selectedEmotion/selectedEmotion';

const sampleJournalData = [0, 1, 0, 0, 0, 0, 0];
function EmotionResult() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <SelectedEmotion />
    </div>
  );
}

export default EmotionResult;
