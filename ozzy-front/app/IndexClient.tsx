"use client";

import React from "react";
import { Card } from "./components/card/Card";
import { Button } from "./components/button/Button";

export default function IndexClient() {
  const text = "재미있다";

  const handleButtonClick = () => {
    console.log("Button Clicked from IndexClient");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <Card
        title={text}
        imageUrl={"/icon.ico"} // 경로를 절대 경로로 변경 (Next.js에서 public 폴더 내 파일을 참조할 때 사용)
        bgColor="#FFFFFF"
      />
      <Button
        label="감정 분석 하기"
        onClick={handleButtonClick}
      />
    </div>
  );
}
