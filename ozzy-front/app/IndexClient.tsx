"use client";

import React from "react";
import { Card } from "./components/card/Card";
import { Button } from "./components/button/Button";
import { ButtonEmpty } from "./components/button/buttonEmpty";
import { CircleButton } from "./components/button/circleButton";
import { WeekCalender } from "./components/weekCalender/weekCalender";

export default function IndexClient() {
  const text = "재미있다";

  const handleButtonClick = () => {
    console.log("Button Clicked from IndexClient");
  };

  return (
    <div style={{ backgroundColor: '#3d3d3d', display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <Card
        title={text}
        imageUrl={"/icon.ico"} // 경로를 절대 경로로 변경 (Next.js에서 public 폴더 내 파일을 참조할 때 사용)
        bgColor="#FFFFFF"
      />
      <Button
        label="감정 분석 하기"
        isActive={true}
        onClick={handleButtonClick}
      />
      <Button
        label="비활성화 버튼"
        isActive={false}
        onClick={handleButtonClick}
      />
      <ButtonEmpty 
        label="아니오"
        onClick={handleButtonClick}
      />
      <CircleButton 
        isActive={true}
        onClick={handleButtonClick}
        />
      <CircleButton 
        isActive={false}
        onClick={handleButtonClick}
        />
      <WeekCalender 
        isJournal={[1,3,6,7]}
      />
    </div>
  );
}
