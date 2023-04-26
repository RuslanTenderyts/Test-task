import { useDispatch } from "react-redux";
import { follow } from "redux/operations";
import { Logo, Container, Line, ContaineAvatar, Avatar, TextBox, P } from "./Tweet.styled";
import { Button } from "./Button";

export const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(follow(tweet));

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
      
      
      <Button selected={true} onClick={handleToggle}> <span> FOLLOW </span> </Button>
         
    </>
  );
};
