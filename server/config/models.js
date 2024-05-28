
module.exports.models = {

  migrate: 'safe',

  attributes: {
    id: {
      type: 'string',
      autoIncrement: true,
    },
    createdAt: {
      type: 'ref',
      columnName: 'created_at',
    },
    updatedAt: {
      type: 'ref',
      columnName: 'updated_at',
    },
  },

  beforeCreate(valuesToSet, proceed) {
    valuesToSet.createdAt = new Date().toISOString(); 

    proceed();
  },

  beforeUpdate(valuesToSet, proceed) {
    valuesToSet.updatedAt = new Date().toISOString(); 

    proceed();
  },

  dataEncryptionKeys: {
    default: 'fKSf/hPekelUegjM7IyM/EhHbd7HI9Kiec5Lxy2t+7w=',
  },

};
