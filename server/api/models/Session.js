

module.exports = {
  attributes: {


    accessToken: {
      type: 'string',
      required: true,
      columnName: 'access_token',
    },
    remoteAddress: {
      type: 'string',
      required: true,
      columnName: 'remote_address',
    },
    userAgent: {
      type: 'string',
      isNotEmptyString: true,
      allowNull: true,
      columnName: 'user_agent',
    },
    deletedAt: {
      type: 'ref',
      columnName: 'deleted_at',
    },



    userId: {
      model: 'User',
      required: true,
      columnName: 'user_id',
    },
  },
};
