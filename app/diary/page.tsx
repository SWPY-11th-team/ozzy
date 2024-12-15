"use client"

import React from "react";
import styles from "./diary.module.css";
import { CircleButton } from "../components/button/circleButton";

export default function Diary() {
    return (
        <div className={styles.container}>
            <div className={styles.circleButtonContainer}>
                <CircleButton />
                <p className={styles.registerText}>일기 작성하기</p>
            </div>
        </div>
    );
}
