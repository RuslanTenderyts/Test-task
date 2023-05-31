import { TweetsList } from "components/TweetsListH/TweetsList";
import { Link, useLocation } from "react-router-dom";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { useState, useEffect, useRef } from "react";
import { fetchTweets, updFollow } from "service/App";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/TweetH/Button";
import { animateScroll } from 'react-scroll';
import { filterTweets } from "utils/filterTweets";
import { useLocalStorage } from "hook/useLocalStorage";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  const [tweets, setTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [followings, setFollowings] = useLocalStorage();
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => { 
    setError(null);
    getFetch();
    setCurrentPage(1);
  }, []);

  const getFetch = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTweets();
      setTweets(data); 
           
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const tweetsOnPage = (tweets) => {
      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;
      const sliceTweets = tweets.slice(0, endIndex);
      return sliceTweets;
  }
    
  const alltweets = filterTweets(tweets, followings, filter);
  const visibleTweets = filterTweets(tweetsOnPage(tweets), followings, filter);
  const isLastPage = (alltweets.length === visibleTweets.length);

  const tweetFollowings = async (id, followers, subscription) => {
    setTweets(prevState =>
      prevState.map(user => {
        if (user.id !== id) return user;
        return {
          ...user,
          followers: !subscription
            ? (user.followers += 1)
            : (user.followers -= 1),
        };
      })
    );
    if (!subscription) {
      setFollowings(prevFollowings => [...prevFollowings, id]);
      await updFollow(id, (followers += 1));
    } else {
      setFollowings(prevFollowings => prevFollowings.filter(el => el !== id));
      await updFollow(id, (followers -= 1));
    }
  };

  const scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 500,
      delay: 8,
      smooth: 'linear',
    });
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    scrollOnMoreButton();
  };
  
  return (
    <>
      <Link to={backLinkHref.current}>Go Back</Link>
      <StatusFilter filter={filter} setFilter={setFilter} />
      {error && <p>{error.message}</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <TweetsList
          tweets={visibleTweets}
          setUsers={setTweets}
          followings={followings}
          isFollowing={tweetFollowings} 
        />
      )}
      {!isLastPage && (
        <Button type="button" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default Tweets;
