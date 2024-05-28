module.exports.policies = {


  '*': 'is-authenticated',

  'users/create': ['is-authenticated', 'is-admin'],
  'users/delete': ['is-authenticated', 'is-admin'],

  'projects/create': ['is-authenticated', 'is-admin'],

  'show-config': true,
  'access-tokens/create': true,
  'access-tokens/exchange-using-oidc': true,
};
