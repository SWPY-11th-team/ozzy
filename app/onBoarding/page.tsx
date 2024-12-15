'use client';

import React, { useState } from 'react';
import styles from '@/app/onBoarding/onboarding.module.css';
import { useRouter } from 'next/navigation';
import { Button } from '../components/button/Button';

const OnBoarding = () => {
  // 현재 페이지 인덱스 상태 관리
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();
  // 온보딩 페이지 데이터
  const pages = [
    {
      id: 0,
      title: '당신의 감정을 알고싶어요',
      description:
        '일기를 쓰고, AI가 분석한 감정 카드를 받아 감정을 알아갑니다.',
      image: '/icons/iconLeft.svg', // 각 이미지 경로
    },
    {
      id: 1,
      title: '감정을 주제로 일기 쓰기',
      description: '감정을 모으면 나만의 감정 서재를 발견할 수 있습니다.',
      image: '/icons/iconLeft.svg',
    },
    {
      id: 2,
      title: '감정을 통해 성장해보세요',
      description: '감정을 돌아보고 살피며, 진정한 나를 발견할 수 있습니다.',
      image: '/icons/iconLeft.svg',
    },
  ];

  // 페이지 이동 핸들러
  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1); // 다음 페이지
    } else {
      router.push('/login'); // 마지막 페이지 처리
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src={pages[pageIndex].image}
          alt={`Onboarding ${pageIndex + 1}`}
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{pages[pageIndex].title}</h2>
          <p className={styles.description}>{pages[pageIndex].description}</p>
        </div>
      </div>
      <button className={styles.button} onClick={handleNext}>
        {pageIndex === pages.length - 1 ? '시작하기' : '다음'}
      </button>
    </div>
  );
};

export default OnBoarding;
