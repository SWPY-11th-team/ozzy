'use client';

import React, { useState } from 'react';

import WeekCalendar from '../components/weekCalender/weekCalendar';
import NavigationBar from '../components/NavigationBar/Nav';

// import styles from './emotion-result.module.css';

const sampleJournalData = [0, 1, 0, 0, 0, 0, 0];
function EmotionResult() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // return (
  //   // <div className={styles.container}>
  //   //   <div className={styles.header}>
  //   //     <div className={styles.headerText}>
  //   //       <div className={styles.year}>{`${currentYear}년`}</div>
  //   //       <div className={styles.month}>{`${currentMonth}월`}</div>
  //   //     </div>
  //   //     <img
  //   //       src="/icons/iconMypage.svg" // 로고 이미지 경로
  //   //       alt="마이페이지"
  //   //       className={styles.logo}
  //   //     />
  //   //   </div>
  //   //   <WeekCalendar journalData={sampleJournalData} />
  //   // </div>
  // );
}

export default EmotionResult;
