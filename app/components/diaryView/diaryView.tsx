"use client";

import React, { useEffect, useState } from "react";
import styles from "./diaryView.module.css";
import { useSearchParams } from "next/navigation";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

interface DiaryData {
  diaryDate: string;
  title: string;
  content: string;
}
const testData = {
    body: {
      diaryDate: "2024-12-12",
      title: "벌써 크리스마스",
      content: `오늘은 날씨가 참 맑았다. 그지만 출근을 해서 별로 좋진 않다.
  내일은 비가 온다. 눈도 올까? 이제 크리스마스가 다가온다.
  기분이 좋다.기분이 좋다.기분이 좋다.기분이 좋다. 기분이 좋으면 크리스마스 트리를 만들어야지. 과자도 만들어야지.
  엄청나게 많이 만들어야지`,
    },
  };
export const DiaryView = () => {
  const searchParams = useSearchParams();
  const diaryDate = searchParams.get("diaryDate"); // URL 쿼리에서 날짜 가져오기
  const token = useLocalStorage();
  const [diary, setDiary] = useState<DiaryData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

//   일기 데이터를 가져오는 함수
  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/diary/get?diaryDate=${diaryDate}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch diary data");
        }

        const result = await response.json();
        setDiary(result.body);
      } catch (error) {
        console.error("Error fetching diary data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token && diaryDate) {
      fetchDiary();
    }
  }, [token, diaryDate]);

useEffect(() => {
    setTimeout(() => {
      setDiary(testData.body); // 테스트 데이터 적용
      setLoading(false);
    }, 500); // 가짜 로딩 시간 500ms
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{diary?.title || "제목 없음"}</h1>
        <button
          className={styles.deleteButton}
          onClick={() => console.log("삭제 기능 구현")}
        >
            <img src="/icons/iconErase.svg" alt="삭제" width="24" height="24" />
        </button>
      </div>
      <p className={styles.content}>{diary?.content || "내용이 없습니다."}</p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.editButton}
          onClick={() => router.push(`/diary/edit?diaryDate=${diaryDate}`)}
        >
          <img src="/icons/iconModify.svg" alt="수정" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};
