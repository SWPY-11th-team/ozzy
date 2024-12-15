import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
} from "chart.js";

// Chart.js 플러그인 등록
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

// 감정 데이터 타입 정의
interface Emotion {
  name: string;
  percentage: number;
  color: string;
}

// 감정 데이터
const emotions: Emotion[] = [
  { name: "기쁨", percentage: 34, color: "#FFDD00" },
  { name: "공포", percentage: 32, color: "#FF5678" },
  { name: "슬픔", percentage: 20, color: "#5B75FF" },
  { name: "분노", percentage: 14, color: "#00D084" },
  { name: "사랑", percentage: 10, color: "#FFA500" },
];

// 캔버스 설정
const CANVAS_SIZE = 100;
const PADDING = 10;
const MAX_ATTEMPTS = 50; // 최대 반복 횟수 제한
const MIN_DISTANCE = 3; // 원 사이 최소 간격 (좁게 설정)

interface Position {
  x: number;
  y: number;
  r: number;
}

const EmotionBubbles: React.FC = () => {
  const generateNonOverlappingPosition = (
    existingPositions: Position[],
    radius: number
  ): { x: number; y: number } => {
    let x: number, y: number, attempts = 0;
    let isOverlapping: boolean;

    do {
      x = Math.random() * (CANVAS_SIZE - PADDING * 2) + PADDING;
      y = Math.random() * (CANVAS_SIZE - PADDING * 2) + PADDING;

      isOverlapping = existingPositions.some(
        (pos) =>
          Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2) <
          pos.r + radius + MIN_DISTANCE
      );

      attempts++;
      if (attempts > MAX_ATTEMPTS) {
        console.warn("최대 반복 횟수 초과, 임의 위치 강제 지정");
        break;
      }
    } while (isOverlapping);

    return { x, y };
  };

  const positions: Position[] = [];
  const data = {
    datasets: emotions.map((emo) => {
      const radius = Math.max(emo.percentage * 0.8, 15); // 최소 크기 키움
      const { x, y } = generateNonOverlappingPosition(positions, radius);
      positions.push({ x, y, r: radius });
      return {
        label: emo.name,
        data: [{ x, y, r: radius }],
        backgroundColor: emo.color,
      };
    }),
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        min: 0,
        max: CANVAS_SIZE,
      },
      y: {
        display: false,
        min: 0,
        max: CANVAS_SIZE,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        backgroundColor: "#000",
        padding: "20px",
      }}
    >
      <Bubble data={data} options={options} />
    </div>
  );
};

export default EmotionBubbles;
