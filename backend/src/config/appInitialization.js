//flow
import Twit from 'twit';
import Pusher from 'pusher';
import consign from 'consign';
import twitConfiguration from './twitConfiguration';
import pusherConfiguration from './pusherConfiguration';
const app = {};

const T = new Twit(twitConfiguration);
const pusher = new Pusher(pusherConfiguration);

app.T = T;
app.pusher = pusher;

consign()
  .include('model')
  .then('controllers')
  .into(app);
