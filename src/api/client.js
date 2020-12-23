const KEY = 'ca019f5e52e841109f87d8766bc040bc';
const URL = `http://newsapi.org/v2/top-headlines?apiKey=${KEY}&country=us&pageSize=20`;

const getNews = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export { getNews };
