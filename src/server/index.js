"use strict";

const Hapi = require("hapi");
const router = require("./router");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});


const init = async () => {
  await server.register(require('inert'));
  await server.register(require("vision"));
  router(server);

  server.views({
    engines: {
      html: require("handlebars")
    },
    relativeTo: __dirname,
    path: "templates",
    helpersPath: "templates/helpers",
  });
  
  server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
