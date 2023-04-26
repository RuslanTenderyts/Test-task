import { useSelector } from "react-redux";
import { Tweet } from "components/Tweet/Tweet";
import { selectAllTweets, selectStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import { Item, List } from "./TweetsList.stayled";

const getVisibleTweets = (tweets, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return tweets.filter(tweet => tweet.id < 5);
    case statusFilters.followings:
      return tweets.filter(tweet => tweet.id > 5);
    default:
      return tweets;
  }
};

export const TweetsList = () => {
  const tweets = useSelector(selectAllTweets);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleTweets = getVisibleTweets(tweets, statusFilter);

  return (
    <List>
      {visibleTweets.map(tweet => (
        <Item key={tweet.id}>
          <Tweet tweet={tweet} />
        </Item>
      ))}
    </List>
  );
};
