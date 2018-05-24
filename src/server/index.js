"use strict";

const Hapi = require("hapi");
const HapiReactViews = require("hapi-react-views");
const router = require("./router");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

require("babel-core/register")({
  presets: ["react", "env"]
});

const init = async () => {
  await server.register(require("inert"));
  await server.register(require("vision"));
  router(server);

  server.views({
    engines: {
      jsx: HapiReactViews
    },
    relativeTo: __dirname,
    path: "templates",
    compileOptions: {
      renderMethod: "renderToString"
    }
  });

  server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
