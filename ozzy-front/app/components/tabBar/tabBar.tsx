import React, { useState } from "react";
import styles from "./tabBar.module.css";

interface Tab {
  id: number;
  label: string;
  iconActive: string;   
  iconInactive: string; 
}

const tabs: Tab[] = [
  { id: 1, label: "다이어리",
     iconActive: "/icons/iconDiary.svg", iconInactive: "/icons/iconCheck.svg" },
  { id: 2, label: "활동",
     iconActive: "/icons/iconHealing.svg", iconInactive: "/icons/iconBack.svg" },
  { id: 3, label: "감정 서적",
     iconActive: "/icons/iconLog.svg", iconInactive: "/icons/iconAgain.svg" },
];

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tabItem} ${activeTab === tab.id ? styles.active : ""}`}
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
