const { TwitterApi } = require('twitter-api-v2');

const createTweetMessage = () => {
  const i = Math.floor(Math.random() * (140 - 1 + 1) + 1);
  let baseMessage = 'まつもとせんぱ';
  for (let j = 0; j < i; j += 1) {
    baseMessage += 'ー';
  }
  baseMessage += 'い';
  return baseMessage;
};

module.exports.hello = async (/* event */) => {
  const client = new TwitterApi(
    {
      appKey: process.env.TWITTER_CONSUMER_KEY,
      appSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    },
  );
  const { data: createdTweet } = await client.v2.tweet(createTweetMessage());
  console.log('Tweet', createdTweet.id, ':', createdTweet.text);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Tweet succeed!',
      },
    ),
  };
};
