// emotionData.ts
interface EmotionCard {
    id: number;
    title: string;
    image: string;
    bgColor: string; // bgColor는 필수 속성
  }
  
  interface Emotion {
    id: number;
    name: string;
    image: string;
    cards: EmotionCard[]; // cards 배열은 EmotionCard 타입의 객체들로 구성
  }

export const emotions = [
    {
      id: 1,
      name: "기쁨",
      image: "/emotionCard/emotionJoy.svg", // 감정 카드 이미지
      cards: [
        { id: 1, title: "흥분된다", image: "/chipHappy/chipHappyAroused.svg", bgColor:"#FCDC4C" },
        { id: 2, title: "자유롭다", image: "/chipHappy/chipHappyFree.svg", bgColor:"FFC800" },
        { id: 3, title: "즐겁다", image: "/chipHappy/chipHappyJoyful.svg", bgColor:"FFFF86" },
        { id: 55, title: "즐겁다", image: "/chipHappy/chipHappyJoyful.svg", bgColor:"FFFF00" },
      ],
    },
    {
      id: 2,
      name: "슬픔",
      image: "/emotionCard/emotionSad.svg",
      cards: [
        { id: 4, title: "고립되다", image: "/chipSad/chipSadIsolated.svg", bgColor:"FFFF00" },
        { id: 5, title: "버려지다", image: "/chipSad/chipSadAbandoned.svg", bgColor:"FFFF00" },
        { id: 6, title: "괴롭힘당하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
      ],
    },
    {
      id: 3,
      name: "분노",
      image: "/emotionCard/emotionAnger.svg",
      cards: [
        { id: 7, title: "짜증나다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 8, title: "화가 난다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 9, title: "억울하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
      ],
    },
    {
      id: 4,
      name: "나쁨",
      image: "/emotionCard/emotionBad.svg",
      cards: [
        { id: 10, title: "두렵다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 11, title: "불안하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 12, title: "겁난다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
      ],
    },
    {
      id: 5,
      name: "두려움",
      image: "/emotionCard/emotionFearful.svg",
      cards: [
        { id: 13, title: "놀랍다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 14, title: "신기하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 15, title: "어리둥절하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
      ],
    },
    {
      id: 6,
      name: "놀람",
      image: "/emotionCard/emotionSurprised.svg",
      cards: [
        { id: 16, title: "사랑스럽다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 17, title: "소중하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
        { id: 18, title: "따뜻하다", image: "/chipSad/chipSadvictimized.svg", bgColor:"FFFF00" },
      ],
    },
    {
      id: 7,
      name: "중립",
      image: "/emotionCard/emotionNeutral.svg",
      cards: [
        { id: 19, title: "싫다", image: "/chipSad/chipSadvictimized.svg" },
        { id: 20, title: "불쾌하다", image: "/chipSad/chipSadvictimized.svg" },
        { id: 21, title: "꺼려지다", image: "/chipSad/chipSadvictimized.svg" },
      ],
    },
  ];
  