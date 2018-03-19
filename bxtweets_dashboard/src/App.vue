<template>
  <div id="app">
    <header>
      <span>BxTweets</span>
    </header>
    <main>
      <div>
        <h1 style="margin: 15px; font-size:40px;">BxTweets</h1>
      </div>
      <div class="columns">
        <div class="column is-one-quarter">
          First Column
        </div>
        <div class="column is-one-quarter">
          Second column
        </div>
        <div class="column is-one-quarter">
          Third column
        </div>
        <div class="column is-one-quarter">
          Fourth column
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import Pusher from 'pusher-js';
import Hello from './components/Hello';

export default {
  name: 'app',
  created() {
    this.subscribe();
  },
  components: {
    Hello,
  },
  methods: {
    subscribe() {
      // const pusher = new Pusher('48396f5e98079d5930c6', {
      //   cluster: 'us2',
      //   encrypted: true,
      // });
      // pusher.subscribe('bxnerd');
      // pusher.bind('new-hashtag', (data) => {
      // });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
