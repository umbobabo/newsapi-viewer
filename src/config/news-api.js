const newsAPI = {
  domain: "newsapi.org",
  version: "v2",
  initialCountry: "gb",
  // TODO remove hardcoded
  apiKey: process.env.NEWS_API_KEY || "e5bcd47372474600861bfb314284b1ce"
};

module.exports = newsAPI;
