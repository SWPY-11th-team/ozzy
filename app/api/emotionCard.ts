export const fetchEmotionCard = async (emotionCardId: string, token: string | null) => {
  try {
    const response = await fetch(
      `/api/emotion-card?emotionCardId=${emotionCardId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // console.error('Error fetching emotion card data:', error);
    // throw error;
  }
};
