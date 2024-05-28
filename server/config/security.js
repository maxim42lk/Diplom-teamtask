module.exports.security = {

  cors: {
    allRoutes: true,
    allowOrigins: ['http://localhost:3000'],
    allowRequestHeaders: ['Authorization'],
    allowCredentials: true,
  },

};
