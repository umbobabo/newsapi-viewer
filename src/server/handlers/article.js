const fetch = require("node-fetch");

module.exports = {
  method: "GET",
  path: "/article",
  handler: (request, h) => {
    var url =
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "from=2018-05-23&" +
      "sortBy=popularity&" +
      "apiKey=e5bcd47372474600861bfb314284b1ce";

    return fetch(url).then(function(response) {
      return response.json();
    });
  }
};
