const fetch = require("node-fetch");
const { initialList, filterList } = require("../../service/news-api");

module.exports = {
  method: "GET",
  path: "/",
  handler: (request, h) => {
    const keyword = request.query.q;
    const isJsonResponse = request.query.format === "json";
    var url = keyword ? filterList(keyword) : initialList;
    return fetch(url).then(function(response) {
      return response.json().then(({ articles }) => {
        if (isJsonResponse) {
          // Return JSON format for CS requests.
          return { articles };
        } else {
          // SSR.
          return h.view("list", { articles });
        }
      });
    });
  }
};
