import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.js 플러그인 등록
ChartJS.register(ArcElement, Tooltip, Legend);

// 감정 데이터 타입 정의
interface Emotion {
  name: string;
  percentage: number;
  color: string;
}

interface EmotionDonutChartProps {
  emotions: Emotion[]; // props로 전달받는 감정 데이터
}

// 컴포넌트
const EmotionDonutChart: React.FC<EmotionDonutChartProps> = ({ emotions }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const data = {
    labels: emotions.map((emo) => emo.name), // 라벨: 감정 이름
    datasets: [
      {
        data: emotions.map((emo) => emo.percentage), // 퍼센티지 값
        backgroundColor: emotions.map(
          (emo, index) =>
            selectedIndex === null || selectedIndex === index
              ? emo.color // 선택된 섹션은 원래 색상 유지
              : 'rgba(255, 255, 255, 0.2)', // 선택되지 않은 섹션은 흐리게
        ),
        borderWidth: 0, // 외곽선 두께
        borderRadius: 20, // 둥근 가장자리
        hoverOffset: 10, // 마우스 오버 시 간격
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '60%', // 도넛 차트의 중앙 비율
    plugins: {
      legend: {
        display: false, // 범례 숨김
      },
      tooltip: {
        enabled: false,
      },
    },

    onClick: (event: any, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index; // 클릭한 섹션의 인덱스 가져오기
        setSelectedIndex(index); // 상태 업데이트
      } else {
        setSelectedIndex(null); // 아무 섹션도 클릭하지 않았을 경우 초기화
      }
    },
    maintainAspectRatio: false, // 반응형을 유지
    layout: {
      padding: 20, // 차트와 가장자리 간의 간격 추가
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '390px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'visible', // 캔버스가 잘리지 않도록 설정
      }}
    >
      <Doughnut data={data} options={options} />
      <div
        id="emotionText"
        style={{
          position: 'absolute', // 중앙 배치를 위해 absolute 설정
          top: '45%', // 상단에서 50% 내려오도록 설정
          left: '50%', // 왼쪽에서 50% 이동
          transform: 'translate(-50%, -50%)', // 정확히 중앙으로 위치 조정
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff', // 텍스트 색상
          textAlign: 'center', // 텍스트 중앙 정렬
        }}
      >
        {selectedIndex !== null && (
          <>
            <div style={{ fontSize: '26px' }}>
              {emotions[selectedIndex].name}
            </div>
            <div style={{ fontSize: '22px' }}>
              {emotions[selectedIndex].percentage}%
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmotionDonutChart;
