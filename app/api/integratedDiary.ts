import { fetchAddEmotion } from './addEmotion';
import { fetchEmotionCard } from './emotionCard';

export const fetchDiary = async (diaryDate: string, token: string | null, setAddEmotionData: Function, setEmotionCardData: Function) => {
  try {
    const response = await fetch(
      `/api/diary?diaryDate=${diaryDate}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.log('No diary found for the selected date.');
        return null;
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Fetch additional APIs if diary is found
    const { addEmotionSeq, emotionCardSeq } = data.body;

    if (addEmotionSeq) {
      const addEmotionData = await fetchAddEmotion(addEmotionSeq, token);
      setAddEmotionData(addEmotionData.body); // 상태 업데이트
    }

    if (emotionCardSeq) {
      const emotionCardData = await fetchEmotionCard(emotionCardSeq, token);
      setEmotionCardData(emotionCardData.body); // 상태 업데이트
    }

    return data;
  } catch (error) {
    // console.error('Error fetching diary data:');
    // throw error;
  }
};
