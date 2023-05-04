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
    const [page, setPage] = useState(1);
    const [followings, setFollowings] = useLocalStorage();
    const [filter, setFilter] = useState('all');
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    
    useEffect(() => { 
      setError(null);
        
      const getFetch = async () => {
        setIsLoading(true);
        try {
          const data = await fetchTweets();
          if (page === 1) {
            setTweets(data);
            return;
          }
    
          if (data.length === 0) {
            setDisabled(true);
          }
    
          setTweets(pervState => [...pervState, ...data]);
                        
          } catch (error) {
          console.log(error)
          setError( error );
    
          } finally {
          setIsLoading( false );
        }
      };
      getFetch ();
      
    }, [page, disabled] );
    
    const visibleTweets = filterTweets(tweets, followings, filter);
    

    const tweetFollowings = async (id, followers, subscription) => {
      setTweets(subs =>
        subs.map(user => {
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
        setFollowings(prevState => [...prevState, id]);
        await updFollow(id, (followers += 1));
      } else {
        setFollowings(prevState => prevState.filter(el => el !== id));
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
      setPage(pervpage => pervpage + 1);
      scrollOnMoreButton();
    };
    
    return (
        <>
            <Link to={backLinkHref.current}>  Go Back </Link>
            <StatusFilter filter={filter} setFilter={setFilter} />
            {error && <p>{error.message}</p>}
            {isLoading && <Loader/>}
            <TweetsList 
              tweets={visibleTweets}
              setUsers={setTweets}
              followings={followings}
              isFollowing={tweetFollowings} 
            />
            <Button 
              type="button" 
              onClick={handleLoadMore} 
              disabled={disabled}
            >
              Load More
            </Button>
        </>
    )
};

export default Tweets;