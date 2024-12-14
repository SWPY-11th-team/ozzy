"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./emotionPage.module.css";

const emotionVideos: { [key: string]: { id: string; title: string; url: string }[] } = {
  joy: [
    { id: "1", title: "1", url: "https://www.youtube.com/embed/F_JqwvKNz-U" },
    { id: "2", title: "2", url: "https://www.youtube.com/embed/ZHXnqWpH8Q4" },
    { id: "3", title: "3", url: "https://www.youtube.com/embed/P1YBUVW4Grw" },
  ],
  sad: [
    { id: "1", title: "4", url: "https://www.youtube.com/embed/5_52kGfD-Yw" },
    { id: "2", title: "5", url: "https://www.youtube.com/embed/as_vTI0_r9g" },
    { id: "3", title: "6", url: "https://www.youtube.com/embed/6VEnTQ2rx_4" },
  ],
  anger: [
    { id: "1", title: "7", url: "https://www.youtube.com/embed/oQA_eWwIu1A" },
    { id: "2", title: "8", url: "https://www.youtube.com/embed/fwPZhnMAoM0" },
    { id: "3", title: "9", url: "https://www.youtube.com/embed/cOdzCMEengo" },
  ],
  bad: [
    { id: "1", title: "10", url: "https://www.youtube.com/embed/NcYYfaNTtn8" },
    { id: "2", title: "11", url: "https://www.youtube.com/embed/2fX8G78GukM" },
    { id: "3", title: "12", url: "https://www.youtube.com/embed/x_EXipsUUxI" },
  ],
  fearful: [
    { id: "1", title: "13", url: "https://www.youtube.com/embed/bWYlwvvaZAw" },
    { id: "2", title: "14", url: "https://www.youtube.com/embed/Vzn6qSp96Jw" },
    { id: "3", title: "15", url: "https://www.youtube.com/embed/tQFmVmJjN-g" },
  ],
  surprised: [
    { id: "1", title: "16", url: "https://www.youtube.com/embed/IUfBNE_QJIg" },
    { id: "2", title: "17", url: "https://www.youtube.com/embed/j7heKeEJARw" },
    { id: "3", title: "18", url: "https://www.youtube.com/embed/A2FjPz4ILhw" },
  ],
  neutral: [
    { id: "1", title: "19", url: "https://www.youtube.com/embed/o1D_4yAvloo" },
    { id: "2", title: "20", url: "https://www.youtube.com/embed/XVolS8ELiVk" },
    { id: "3", title: "21", url: "https://www.youtube.com/embed/pX1v5Mm3eik" },
  ],
};

const emotionTitles: { [key: string]: string } = {
    joy: "기쁜",
    sad: "슬픈",
    anger: "화난",
    bad: "나쁜",
    fearful: "두려운",
    surprised: "놀란",
    neutral: "중립적인",
  };

const EmotionPage = () => {
    const router = useRouter();
    const params = useParams();
    const emotion = Array.isArray(params?.emotion) ? params.emotion[0] : params?.emotion; // string으로 변환
  
    if (!emotion || !emotionVideos[emotion]) {
      return <div className={styles.error}>존재하지 않는 감정입니다.</div>;
    }
  
    const videos = emotionVideos[emotion];
    const emotionTitle = emotionTitles[emotion];
    return (
      <div className={styles.container}>
        <div className={styles.header}><button onClick={() => router.push('/healing')} className={styles.backButton}>
            <img src="/icons/iconBack.svg" alt="뒤로가기" width="24" height="24" />
          </button>
          <h1 className={styles.title}>{emotionTitle} 감정을 돌봐주세요</h1>
        </div>
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <iframe
                className={styles.video}
                src={video.url}
                title={video.id}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default EmotionPage;
