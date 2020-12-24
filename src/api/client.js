const KEY = '2e451bcc8dfbac73fe2a37ebb97cc9c5';
const URL = `https://api.mediastack.com/v1/news?access_key=${KEY}&limit=20?languages=en`;

const getNews = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export { getNews };
