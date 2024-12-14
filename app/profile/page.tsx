'use client';

import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<any>(null);

    // 첫 렌더링 시 사용자 정보 가져오기
    useEffect(() => {
        getUserFromDate();
    }, []);

    // getUserFromDate 함수
    const getUserFromDate = async () => {
        const token = localStorage.getItem('accessToken');

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/date`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        });

        const data = await response.json();
        // console.log(data);

        setUserData(data.body);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {userData ? (
                    <>
                        <p className={styles.greeting}>반가워요, {userData.name}님</p>
                        <p className={styles.subText}>
                            함께한 지 <span className={styles.highlight}>{userData.todayFromDate}</span>일째,
                            <br/>
                            벌써 <span className={styles.highlight}>{userData.diaryCount}번</span>의 감정을 기록했어요.
                        </p>
                    </>
                ) : (
                    <p>로딩 중...</p>
                )}
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem} onClick={() => router.push("/profile/account")}>
                    <p>계정 관리</p>
                    <span className={styles.arrow}>›</span>
                </div>
                <div className={styles.menuItem} onClick={() => router.push("https://forms.gle/ECZDZCGafDeERNPL7")}>
                    <p>1:1 문의하기</p>
                    <span className={styles.arrow}>›</span>
                </div>
                <div className={styles.menuItem}>
                    <p>이용약관</p>
                    <span className={styles.arrow}>›</span>
                </div>
                <div className={styles.menuItem}>
                    <p>버전</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
