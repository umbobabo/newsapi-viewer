const fetch = require("node-fetch");
const { initialList, filterList } = require("../../service/news-api");

module.exports = {
  method: "GET",
  path: "/",
  handler: (request, h) => {
    const keyword = request.query.q;
    var url = keyword ? filterList(keyword) : initialList;
    return fetch(url).then(function(response) {
      console.log(url);
      console.log(response);
      return response.json().then(({ articles }) => {
        return h.view("list", {
          articles,
        });
      });
    });
  }
};