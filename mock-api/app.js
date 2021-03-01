const fastify = require('fastify');

const landingRouter = require('./routes/landing');

function build() {
  const app = fastify();

  app.register(landingRouter, { prefix: '/landing' });

  return app;
};
module.exports = build;
