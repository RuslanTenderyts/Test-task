import { Logo, Container, Line, ContaineAvatar, Avatar, TextBox, P } from "./Tweet.styled";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import { addfollow } from "components/service/App";


export const Tweet = ({ tweet }) => {

  const [isFollow, setIsFollow] = useState(JSON.parse(localStorage.getItem(tweet.id)) || false);

  useEffect(() => {
      localStorage.setItem(tweet.id, isFollow);
  }, [tweet.id, isFollow]);


  const handleToggle = (id) => {
    setIsFollow(prevState => !prevState); 
    addfollow(id, tweet.followers)
    console.log(id, tweet.followers)
  }

  return (
    <>
      <Logo />
      <Container />
      <Line></Line>
      <ContaineAvatar>
        <Avatar src={tweet.avatar} alt={tweet.tweet} />
      </ContaineAvatar>
      <TextBox>
        <P> {tweet.tweets} TWEETS </P>
        <P> {tweet.followers.toLocaleString("en-US")} FOLLOWERS </P>
      </TextBox>
      
      
      <Button selected={isFollow} onClick={()=>handleToggle(tweet.id)}> FOLLOW </Button>
         
    </>
  );
};
