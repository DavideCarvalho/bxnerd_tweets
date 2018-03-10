// @flow
module.exports = (app) => {
  const model = {}
  const { pusher } = app;

  model.getBxNerdTweet = (tweet: Object) => {
    console.log(tweet);
    pusher.trigger('bxnerd', 'new-hashtag', {
      'message': tweet
    });
  };

  return model;
}
