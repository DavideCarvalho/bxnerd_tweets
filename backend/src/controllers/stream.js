// @flow
module.exports = (app) => {
  const { model, T } = app;
  const { stream } = model;
  const { getBxNerdTweet } = stream;
  const twitterStream = T.stream('statuses/filter', { track: '#BxNerd' });
  twitterStream.on('tweet', getBxNerdTweet);
};
