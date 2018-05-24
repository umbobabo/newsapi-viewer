module.exports = {
  method: "GET",
  path: "/static/{p*}",
  handler: {
    directory: {
      path: "build/static"
    }
  }
};
