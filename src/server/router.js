const handlers = [
  require("./handlers/list.js"),
  require("./handlers/public-assets.js")
];

function router(server) {
  handlers.forEach(handler => server.route(handler));
}

module.exports = router;
