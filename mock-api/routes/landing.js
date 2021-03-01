async function landingRouter(app) {
  app.route({
    method: 'GET',
    url: '/countriestovisit',
    handler: (request, reply) => {
      reply.send(
        [
          {
            "name": "Portugal",
            "imageUrl": "local-img-url-here",
            "processingTime": "5-6 working days"
          },
          {
            "name": "Russia",
            "imageUrl": "local-img-url-here",
            "processingTime": "7-8 working days"
          },
          {
            "name": "Australia",
            "imageUrl": "local-img-url-here",
            "processingTime": "7-8 working days"
          },
        ]
      );
    }
  });
};
module.exports = landingRouter;
