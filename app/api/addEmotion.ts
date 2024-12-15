export const fetchAddEmotion = async (addEmotionId: string, token: string | null) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/add-emotion?addEmotionId=${addEmotionId}`,
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
    // console.error('Error fetching add emotion data:');
    // throw error;
  }
};