const newsAPI = {
  domain: "newsapi.org",
  version: "v2",
  initialCountry: "uk",
  apiKey: process.env.NEWS_API_KEY,
};

module.exports = newsAPI;