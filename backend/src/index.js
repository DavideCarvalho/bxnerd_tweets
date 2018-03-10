// @flow
import Twit from 'twit';
import Pusher from 'pusher';
import twitConfiguration from './config/twitConfiguration';
import pusherConfiguration from './config/pusherConfiguration';

const T = new Twit(twitConfiguration);
const pusher = new Pusher(pusherConfiguration);

export const getBxNerdTweet = (tweet: Object) => {
  pusher.trigger('bxnerd', 'new-hashtag', {
    'message': tweet
  });
};

const stream = T.stream('statuses/filter', { track: '#BxNerd' });

stream.on('tweet', getBxNerdTweet);
