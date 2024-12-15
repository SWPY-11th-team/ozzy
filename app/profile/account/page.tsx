'use client';

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./AccountPage.module.css";

const AccountPage = () => {
    const router = useRouter(); // useRouter를 컴포넌트 내부에서 올바르게 호출

    // 현재 로그인 옵션 (백엔드 또는 로컬 스토리지에서 불러오는 데이터)
    const currentLoginOption = "카카오"; // 예시로 '카카오'를 사용

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.backButton} onClick={() => history.back()}>←</button>
                <p className={styles.title}>계정</p>
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem} onClick={() => router.push("/profile/nickname")}>
                    <p>닉네임 변경</p>
                    <span className={styles.arrow}>›</span>
                </div>
                <div className={styles.menuItem}>
                    <div>
                        <p>로그인 옵션</p>
                        <p className={styles.subText}>{`현재 ${currentLoginOption}로 로그인하고 있어요`}</p>
                    </div>
                    <span className={styles.arrow}>›</span>
                </div>
                <div className={styles.menuItem}>
                    <p className={styles.logout}>로그아웃</p>
                </div>
                <div className={styles.menuItem}>
                    <p className={styles.deleteAccount}>계정삭제</p>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
