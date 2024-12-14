'use client';

import React from "react";
import {useRouter} from "next/navigation";
import styles from "./AccountPage.module.css";

const AccountPage = () => {
    const router = useRouter(); // useRouter를 컴포넌트 내부에서 올바르게 호출

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
                    <p>로그인 옵션</p>
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
