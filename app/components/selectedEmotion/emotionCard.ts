export interface EmotionCardData {
    id: string; // joy, sad, anger 등 감정 ID
    image: string; // 이미지 경로
    fill: string[]; // Fill 색상 (Linear Gradient)
    stroke: string; // 테두리 색상
    shadow: string; // 그림자 스타일
  }
  
  export const emotionCardData: EmotionCardData[] = [
    {
      id: "happy",
      image: "/emotion/emotionJoy.svg",
      fill: ["#9C7C2A", "#1D1609"], // Gradient
      stroke: "#F3DB0C",
      shadow: "4px 4px 8px rgba(0, 0, 0, 0.25)",
    },
    {
      id: "sad",
      image: "/emotion/emotionSad.svg",
      fill: ["#13152E", "#2D2D3D"],
      stroke: "#48ABEC",
      shadow: "x 4 / y 4 / blur 8 / color #000000",
    },
    {
      id: "anger",
      image: "/emotion/emotionAngry.svg",
      fill: ["#833233", "#1D0909"],
      stroke: "#FF5151",
      shadow: "x 4 / y 4 / blur 8 / color #000000",
    },
    {
      id: "surprised",
      image: "/emotion/emotionSurprised.svg",
      fill: ["#5A2982", "#14091D"],
      stroke: "#B641FF",
      shadow: "x 4 / y 4 / blur 8 / color #000000",
    },
    {
      id: "bad",
      image: "/emotion/emotionBad.svg",
      fill: ["#803272", "#1D0915"],
      stroke: "#E036C6",
      shadow: "x 4 / y 4 / blur 8 / color #000000",
    },
    {
      id: "fearful",
      image: "/emotion/emotionFearful.svg",
      fill: ["#805232", "#1D1109"],
      stroke: "#FD6F17",
      shadow: "x 4 / y 4 / blur 8 / color #000000",
    },
    {
      id: "neutral",
      image: "/emotion/emotionNeutral.svg",
      fill: ["#5D8032", "#0C1D09"],
      stroke: "#60F04A",
      shadow: "x 4 / y 4 / blur 8 / color #000000",
    },


  ];
  