export const fetchSingleDiary = async (
  diaryDate: string,
  token: string | null,
) => {
  // try {
  const response = await fetch(
    `/api/diary?diaryDate=${diaryDate}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    },
  );

  // if (!response.ok) {
  if (response.status === 404) {
    console.log('No diary found for the selected date.');
    return null;
  }
  // throw new Error(`HTTP error! Status: ${response.status}`);
  // }

  const data = await response.json();
  return data;
  // } catch (error) {
  // console.error('Error fetching diary data:');
  // throw error;
  // }
};
