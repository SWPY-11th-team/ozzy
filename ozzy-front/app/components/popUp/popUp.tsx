"use client";

import React from "react";
import styles from "./popUp.module.css";
import { Button } from "../button/Button";
import { ButtonEmpty } from "../button/buttonEmpty";

interface PopupProps {
  isVisible: boolean; // 팝업 표시 여부
  message: string; // 팝업 메시지
  confirmLabel: string; // 확인 버튼 레이블
  cancelLabel: string; // 취소 버튼 레이블
  onConfirm: () => void; // 확인 버튼 동작
  onCancel: () => void; // 취소 버튼 동작
}

export const Popup: React.FC<PopupProps> = ({
  isVisible,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}) => {
  if (!isVisible) return null; // 팝업이 비활성화된 경우 렌더링하지 않음

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonContainer}>
          <ButtonEmpty
            label={cancelLabel}
            onClick={onCancel}
            className={styles.cancelButton}
          />
          <Button
            label={confirmLabel}
            onClick={onConfirm}
            className={styles.confirmButton}
          />
        </div>
      </div>
    </div>
  );
};
