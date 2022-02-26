import Fastify from "fastify";
import fastifyExpress from "fastify-express";
import sirv from "sirv";
import { createRequestHandler } from "@mcansh/remix-fastify";

import * as serverBuild from "@remix-run/dev/server-build";

async function startServer() {
  const fastify = Fastify({ logger: true });

  await fastify.register(fastifyExpress);

  // Remix fingerprints its assets so we can cache forever.
  fastify.use(
    "/build",
    sirv("public/build", { immutable: true, maxAge: 31536000 })
  );

  // Everything else (like favicon.ico) is cached for an hour. You may want to be
  // more aggressive with this caching.
  fastify.use(sirv("public/build", { maxAge: 3600 }));

  fastify.all(
    "*",
    createRequestHandler({
      build: serverBuild,
      mode: process.env.NODE_ENV,
    })
  );

  const port = process.env.PORT || 3000;

  fastify.listen(port, () => {
    console.log(`Fastify server listening on port ${port}`);
  });
}

startServer();
