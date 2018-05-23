module.exports = {
  method: "GET",
  path: "/css/{p*}",
  handler: {
    directory: {
      path: "src/css"
    }
  }
};
