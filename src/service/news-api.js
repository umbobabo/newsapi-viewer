const { domain, version, initialCountry, apiKey } = require("../config/news-api");

if (!apiKey) {
  throw new Error("Please provide set the environmental variable NEWS_API_KEY");
}

const serviceUrl = `https://${ domain }/${ version }`;
const apiKeyQueryString = `apiKey=${apiKey}`
const countryQueryString = `country=${initialCountry}`;

module.exports = {
  initialList: `${serviceUrl}/top-headlines?${countryQueryString}&${apiKeyQueryString}`,
  filterList: q => `${serviceUrl}/everything?q=${q}&${apiKeyQueryString}`,
};

