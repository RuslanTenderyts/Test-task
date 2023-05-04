
export const filterTweets = (tweets, myFollowings, filter) => {
  switch (filter) {
    case 'all':
      return tweets;
    case 'follow':
      return tweets.filter(({ id }) => !myFollowings.includes(id));
    case 'followings':
      return tweets.filter(({ id }) => myFollowings.includes(id));
    default:
      return tweets;
  }
};