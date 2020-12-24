const KEY = 'iaVFBZyPE6P4G4p1lZP5dSVdWI93AqRN';
const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${KEY}`;

const getNews = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export { getNews };
