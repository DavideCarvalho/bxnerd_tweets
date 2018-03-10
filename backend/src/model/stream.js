// @flow
module.exports = (app) => {
  const model = {};
  const { pusher } = app;

  model.getBxNerdTweet = (tweet: Object) => {
    pusher.trigger('bxnerd', 'new-hashtag', {
      'message': tweet
    });
  };

  return model;
};
