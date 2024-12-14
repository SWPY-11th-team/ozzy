"use client"

import React, { useState } from 'react';
import styles from './tabBar.module.css';
import { usePathname } from 'next/navigation';

interface Tab {
  id: number;
  label: string;
  iconActive: string;
  iconInactive: string;
}

const tabs: Tab[] = [
  {
    id: 1,
    label: '다이어리',
    iconActive: '/icons/iconDiary.svg',
    iconInactive: '/icons/iconDiaryInactive.svg',
  },
  {
    id: 2,
    label: '활동',
    iconActive: '/icons/iconHealing.svg',
    iconInactive: '/icons/iconHealingInactive.svg',
  },
  {
    id: 3,
    label: '감정 서적',
    iconActive: '/icons/iconLog.svg',
    iconInactive: '/icons/iconLogInactive.svg',
  },
];

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
      const pathname = usePathname(); // 현재 경로 가져오기
      const isHiddenTabBar =
        pathname.startsWith('/terms') || // /terms 및 하위 경로 포함
        pathname === '/login' ||
        pathname === '/nickname';

  return (
    <div className={styles.tabBar} style={{visibility: isHiddenTabBar ? "hidden" : "visible"}}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tabItem} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <img
            src={activeTab === tab.id ? tab.iconActive : tab.iconInactive}
            alt={tab.label}
            className={styles.icon}
          />
          <span className={styles.label}>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};
