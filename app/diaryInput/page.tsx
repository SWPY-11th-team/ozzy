'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Popup } from '../components/popUp/popUp';
import styles from './diaryInput.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchDiary } from '../api/integratedDiary';
import { fetchSingleDiary } from '../api/fetchSingleDiary';

function SearchParamsWrapper({
  children,
}: {
  children: (params: { queryDate: string | null }) => React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const queryDate = searchParams.get('diaryDate');

  return children({ queryDate });
}

function DiaryInputContent({ queryDate }: { queryDate: any }) {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isPopupVisible, setPopupVisible] = useState(false); // 팝업 상태 관리
  const [isUpdate, setIsUpdate] = useState(false);
  const maxContentLength = 4000;

  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(utc + koreaTimeDiff);
  const [date, setDate] = useState<any>(
    queryDate ||
      `${koreaTime.getFullYear()}-${String(koreaTime.getMonth() + 1).padStart(2, '0')}-${String(koreaTime.getDate()).padStart(2, '0')}`,
  );

  const handleSaveClick = () => {
    setPopupVisible(true); // 팝업 표시
  };

  const handleCancel = () => {
    setPopupVisible(false); // 팝업 숨기기
  };

  const handleConfirm = async () => {
    setPopupVisible(false);
    const result = await saveDiary(date);
    const addEmotionSeq = result.body.addEmotionSeq;
    const diaryDate = result.body.diaryDate;

    router.push(
      `/emotionSelect?addEmotionSeq=${addEmotionSeq}&diaryDate=${diaryDate}`,
    );
  };

  const token = useLocalStorage();

  const saveDiary = async (diaryDate: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/diary`,
        {
          method: isUpdate ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            title,
            content,
            diaryDate,
          }),
        },
      );

      if (response.status !== 201 && response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const result = await fetchSingleDiary(date, token);
        if (result !== null) {
          setTitle(result.body.title);
          setContent(result.body.content);
          setIsUpdate(true);
        }
      } catch (error) {
        console.error('Error fetching diary:', error);
      }
    };

    if (token) {
      fetchDiary();
    }
  }, [date, token]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className={styles.container}>
        {/* 상단 헤더 */}
        <header className={styles.header}>
          <img
            src="/icons/iconLeft.svg"
            alt="뒤로가기"
            className={styles.icon}
            onClick={() => router.back()}
          />
          <h1 className={styles.date}>{date.replace(/-/g, '. ')}</h1>
          <img
            src="/icons/iconCheck.svg"
            alt="저장"
            className={styles.icon}
            onClick={handleSaveClick}
          />
        </header>

        {/* 재사용 가능한 팝업 */}
        <Popup
          isVisible={isPopupVisible}
          message="일기를 저장할까요?"
          confirmLabel="네!"
          cancelLabel="수정할래요"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />

        {/* 제목 입력 */}
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.titleInput}
            placeholder="제목"
            spellCheck="false"
          />
        </div>

        {/* 본문 입력 */}
        <div className={styles.contentContainer}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={maxContentLength}
            className={styles.contentInput}
            placeholder="오늘 하루는 어떠셨나요?"
            spellCheck="false"
          />
          <div className={styles.charCount}>
            {`${content.length}/${maxContentLength}`}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default function DiaryInput() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper>
        {({ queryDate }) => <DiaryInputContent queryDate={queryDate} />}
      </SearchParamsWrapper>
    </Suspense>
  );
}
