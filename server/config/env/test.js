
module.exports = {

  datastores: {


    default: {
      adapter: 'sails-disk',


      inMemoryOnly: true,
    },
  },

  log: {
    level: 'warn',
  },
};
