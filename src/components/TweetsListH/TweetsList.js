import { Tweet } from "components/TweetH/Tweet";
import { Item, List } from "./TweetsList.stayled";
import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';


export const TweetsList = ({ tweets, followings, isFollowing }) => {
 
  return (
    <>   
      <Toaster toastOptions={{ duration: 500}} />
      {tweets.length > 0 &&   
          <List>
            {tweets.map(tweet => (
              <Item key={tweet.id}>
                <Tweet tweet={tweet}  item={tweet} followings={followings} isFollowing={isFollowing} />
              </Item>
            ))}
          </List> }  
    </>
  );
}



TweetsList.propTypes = {
  items: PropTypes.array,
  followings: PropTypes.array,
  isFollowing: PropTypes.func,
}