

const url = require('url');

const { customLogger } = require('../../utils/logger');

module.exports = {

  datastores: {


    default: {

    },
  },

  models: {

  },



  blueprints: {

  },



  security: {


    cors: {

    },
  },



  session: {


    cookie: {

      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  },



  sockets: {


    onlyAllowOrigins: [new url.URL(process.env.BASE_URL).origin],

  },

 

  log: {

    inspect: false,
    custom: customLogger,


    noShip: true,
  },

  http: {
 

    cache: 365.25 * 24 * 60 * 60 * 1000, // One year


    trustProxy: !!process.env.TRUST_PROXY,
  },



  custom: {

  },
};
