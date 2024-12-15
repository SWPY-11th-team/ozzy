export const fetchAddEmotion = async (addEmotionId: string, token: string | null) => {
  const host = window.location.hostname === "localhost" 
  ? 'http://www.ozzy-backend.duckdns.org'
  : "api";


  try {
    const response = await fetch(
      `${host}/api/add-emotion?addEmotionId=${addEmotionId}`,
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