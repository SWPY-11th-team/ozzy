'use client';

import React, { useState } from 'react';
import styles from './tabBar.module.css';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface Tab {
  id: number;
  label: string;
  iconActive: string;
  iconInactive: string;
  path: string;
}

const tabs: Tab[] = [
  {
    id: 1,
    label: '다이어리',
    iconActive: '/icons/iconDiary.svg',
    iconInactive: '/icons/iconDiaryInactive.svg',
    path: '/diary',
  },
  {
    id: 2,
    label: '활동',
    iconActive: '/icons/iconHealing.svg',
    iconInactive: '/icons/iconHealingInactive.svg',
    path: '/healing',
  },
  {
    id: 3,
    label: '감정 서적',
    iconActive: '/icons/iconLog.svg',
    iconInactive: '/icons/iconLogInactive.svg',
    path: '/library',
  },
];

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const pathname = usePathname(); // 현재 경로 가져오기
  const isHiddenTabBar =
    pathname.startsWith('/terms') || // /terms 및 하위 경로 포함
    pathname === '/login' ||
    pathname === '/nickname' ||
    pathname === '/onBoarding' ||
    pathname === '/';

  const router = useRouter();

  const handleTabClick = (id: number, path: string) => {
    setActiveTab(id); // 탭 상태 업데이트
    router.push(path); // 라우팅
  };

  return (
    <div
      className={styles.tabBar}
      style={{ visibility: isHiddenTabBar ? 'hidden' : 'visible' }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tabItem} ${
            activeTab === tab.id ? styles.active : ''
          }`}
          onClick={() => handleTabClick(tab.id, tab.path)}
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
