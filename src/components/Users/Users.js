import { useDispatch } from "react-redux";
import { follow } from "redux/operations";
import { Logo, Container, Line, ContaineAvatar, Avatar, TextBox, P } from "./User.styled";
import { Button } from "./Button";

export const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(follow(user));

  return (
    <>
      <Logo />
      <Container />
      <Line></Line>
      <ContaineAvatar>
        <Avatar src={user.avatar} alt={user.user} />
      </ContaineAvatar>
      <TextBox>
        <P> {user.tweets} TWEETS </P>
        <P> {user.followers.toLocaleString("en-US")} FOLLOWERS </P>
      </TextBox>
      
      
      <Button selected={true} onClick={handleToggle}> <span> FOLLOW </span> </Button>
         
    </>
  );
};
