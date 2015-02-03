Accounts.onCreateUser(function(options, user) {
  var accessToken = user.services.github.accessToken;

  var result = Meteor.http.get('https://api.github.com/user', {
    headers: {
      "User-Agent": "projectvote"
    },
    params: {
      access_token: accessToken
    }
  });

  if (result.error) {
    throw result.error;
  }

  var profile = _.pick(result.data,
    'name',
    'login',
    'avatar_url');

  user.profile = profile;

  return user;
  
});
