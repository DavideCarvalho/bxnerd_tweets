// @flow
const twit = require('twit');
const Pusher = require('pusher');
const app = require('./config/app_initialization.js');
const PORT: number = process.env.PORT || 3000;

const consumerKey: string = 'KGlMprzw5QJI9fvQljY4CQFWY';
const consumerSecret: string = 'PcipeUsNRvrpBavOHYl5hp6hzOBUsd3M2HykxpCsobvixkEICA';
const accessToken: string = '2300495636-1uAyCFh5n8sCyp9UULbu3YfTEJv21wqT9upeebF';
const accessTokenSecret: string = 'y13am5CmCy7Z2srYQNnfbPg3oZ3FNHpNwR7anRWiwXNyE';

const T = new twit: TwitType({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
  timeout_ms: 60*1000
});

const pusher = new Pusher({
  appId: '489325',
  key: '48396f5e98079d5930c6',
  secret: 'd047e38f60924e138268',
  cluster: 'us2',
  encrypted: true
});

const logTweet = (tweet) => {
  console.log(tweet);
  pusher.trigger('bxnerd', 'new-hashtag', {
    'message': tweet
  })
}

let stream = T.stream('statuses/filter', { track: '#BxNerd' })

stream.on('tweet', logTweet)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
