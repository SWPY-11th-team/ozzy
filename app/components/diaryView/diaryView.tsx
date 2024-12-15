'use client';

import styles from './diaryView.module.css';
import { useRouter } from 'next/navigation';

export const DiaryView = ({ data }: { data: any }) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{data.title || '제목 없음'}</h1>
        <button
          className={styles.deleteButton}
          onClick={() => console.log('삭제 기능 구현')}
        >
          <img src="/icons/iconErase.svg" alt="삭제" width="24" height="24" />
        </button>
      </div>
      <p className={styles.content}>{data.content || '내용이 없습니다.'}</p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.editButton}
          onClick={() => router.push(`/diaryInput?diaryDate=${data.diaryDate}`)}
        >
          <img src="/icons/iconModify.svg" alt="수정" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};
