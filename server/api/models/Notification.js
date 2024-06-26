

module.exports = {
  attributes: {


    isRead: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'is_read',
    },


    userId: {
      model: 'User',
      required: true,
      columnName: 'user_id',
    },
    actionId: {
      model: 'Action',
      required: true,
      columnName: 'action_id',
    },
    cardId: {
      model: 'Card',
      required: true,
      columnName: 'card_id',
    },
  },
};
