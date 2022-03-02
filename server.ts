import Fastify from "fastify";
import fastifyExpress from "fastify-express";
import sirv from "sirv";
import { createRequestHandler } from "@mcansh/remix-fastify";

import * as serverBuild from "@remix-run/dev/server-build";

const MODE = process.env.NODE_ENV;

async function startServer() {
  const fastify = Fastify({
    logger: true,
    disableRequestLogging: process.env.ENABLE_REQUEST_LOGGING !== "true",
  });

  await fastify.register(fastifyExpress);

  // Remix fingerprints its assets so we can cache forever.
  fastify.use(
    "/build",
    sirv("public/build", {
      dev: MODE !== "production",
      immutable: true,
      maxAge: 31536000,
    })
  );

  // Everything else (like favicon.ico) is cached for an hour. You may want to be
  // more aggressive with this caching.
  fastify.use(
    sirv("public", {
      dev: MODE !== "production",
      maxAge: 3600,
    })
  );

  fastify.all(
    "*",
    createRequestHandler({
      build: serverBuild,
      mode: MODE,
    })
  );

  const port = process.env.PORT || 3000;

  fastify.listen(port, "0.0.0.0", () => {
    console.log(`Fastify server listening on port ${port}`);
  });
}

startServer();
