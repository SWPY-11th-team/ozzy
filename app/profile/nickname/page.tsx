'use client';

import React, { useState, useEffect } from "react";
import styles from "./NicknamePage.module.css";
import { useRouter } from "next/navigation";

const NicknamePage = () => {
    const router = useRouter();
    const [nickname, setNickname] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const token = localStorage.getItem('accessToken');

    // 첫 렌더링 시 닉네임 가져오기
    useEffect(() => {
        getUserFromDate();
    }, []);

    const getUserFromDate = async () => {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        });

        const data = await response.json();

        // 닉네임을 상태에 업데이트
        setNickname(data.body.nickName);
    };

    const updateNickName = async (nickname) => {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body : JSON.stringify({
                nickName : nickname
            })
        });

        if (response.ok) {
            const data = await response.json();
            alert("닉네임을 변경 했습니다.");
        } else {
            const errorData = await response.json();
            console.log("업데이트 실패:", errorData);
        }
    }

    const handleSave = () => {
        if (nickname.length === 0 || nickname.length > 10) {
            setErrorMessage("닉네임은 1~10자 사이로 입력해주세요.");
            return;
        }

        updateNickName(nickname);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.backButton} onClick={() => window.history.back()}>←</button>
                <p className={styles.title}>어떻게 불러드릴까요?</p>
            </div>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    maxLength={10}
                    placeholder="닉네임을 입력해주세요"
                />
                {nickname && (
                    <button className={styles.clearButton} onClick={() => setNickname("")}>✖</button>
                )}
            </div>
            <p className={styles.characterCount}>{nickname.length}/10</p>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <button
                className={styles.saveButton}
                onClick={handleSave}
                disabled={nickname.length === 0 || nickname.length > 10}
            >
                완료
            </button>
        </div>
    );
};

export default NicknamePage;
