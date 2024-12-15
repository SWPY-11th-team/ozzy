"use client";

import React, { useState } from "react";
import styles from "./onboarding.module.css";
import { useRouter } from "next/navigation";

const Onboarding = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();

  const pages = [
    {
      id: 0,
      title: "당신의 감정을 알고싶어요🌿",
      description: "일기를 쓰고,\nAI가 분석한 감정 카드를 받아\n감정을 알아갑니다.",
      image: "/onBoarding/index1.svg",
    },
    {
      id: 1,
      title: "감정을 차곡차곡 모아보세요🌿",
      description: "감정을 모으면,\n나만의 감정 서재에\n방문할 수 있습니다.",
      image: "/onBoarding/index2.svg",
    },
    {
      id: 2,
      title: "감정을 돌봐주세요🌿",
      description: "감정을 돌보고 싶을 때,\n영감이 되는 영상과\n위로가 되는 글을 만납니다.",
      image: "/onBoarding/index3.svg",
    },
  ];

  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      router.push("/login"); // 마지막 페이지에서 이동
    }
  };

  const progressWidth = `${((pageIndex + 1) / pages.length) * 100}%`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBarContainer}>
        {pages.map((_, index) => (
          <div
            key={index}
            className={`${styles.progressBarSegment} ${
              pageIndex === index ? styles.activeSegment : ""
            }`}
    ></div>
  ))}
</div>
      {/* 콘텐츠 영역 */}
      <div className={styles.content}>
        <img
          src={pages[pageIndex].image}
          alt={`Onboarding ${pageIndex + 1}`}
          className={styles.image}
        />
        <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{pages[pageIndex].title}</h2>
          <p className={styles.description}>{pages[pageIndex].description}</p>
        </div>
        <button className={styles.button} onClick={handleNext}>
          {pageIndex === pages.length - 1 ? "시작하기" : "다음"}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
