'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Next.js 라우터 훅

import styles from './Nav.module.css';

const NavigationBar = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.navContainer}>
      <button className={styles.backButton} onClick={handleBackClick}>
        <img src="/icons/iconBack.svg" alt="뒤로가기" className={styles.icon} />
      </button>
    </div>
  );
};

export default NavigationBar;
