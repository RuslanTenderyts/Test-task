import { Logo, Container, Line, ContaineAvatar, Avatar, TextBox, P } from "./Tweet.styled";
import { Button } from "./Button";
import { useState } from "react";
import PulseLoader from 'react-spinners/PulseLoader';
import PropTypes from 'prop-types';


export const Tweet = ({ tweet, followings, isFollowing }) => {
  const { tweets, followers, user, avatar, id } = tweet;

  const [isLoading, setIsLoading] = useState(false);
  const [isFollow, setIsFollow] = useState(followings.includes(id));

  const handleFollowBtn = async () => {
    setIsLoading(true);
    await isFollowing(id, followers, isFollow);
    setIsFollow(pervState => !pervState);
    setIsLoading(false);
  };

  return (
    <>
      <Logo />
      <Container />
      <Line></Line>
      <ContaineAvatar>
        <Avatar src={avatar} alt={user} />
      </ContaineAvatar>
      <TextBox>
        <P> {tweets} TweetS </P>
        <P> {followers.toLocaleString("en-US")} FOLLOWERS </P>
      </TextBox>
      <Button 
          type="button" 
          disabled={isLoading} 
          selected={isFollow} 
          onClick={handleFollowBtn}
          > 
          {isLoading ? (
            <PulseLoader size={10} color='#846ac2'/>
            ) : !isFollow ? (
              "follow"
            ) : (
              "follower"
            )}
          </Button>
         
    </>
  );
};


Tweet.propTypes = {
  item: PropTypes.object,
  followings: PropTypes.array,
  isFollowing: PropTypes.func,
}