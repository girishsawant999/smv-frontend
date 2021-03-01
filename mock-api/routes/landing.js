async function landingRouter(app) {
  app.route({
    method: 'GET',
    url: '/countriestovisit',
    handler: (request, reply) => {
      reply.send('Test');
    }
  });
};
module.exports = landingRouter;
