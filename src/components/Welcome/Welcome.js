import {Container, H1, P } from "./Welcome.styled";
import { Back } from "components/Back/Back";

export const Welcome = () => {
    return (
        <Container>
        <H1>
                Welcome to TWEETS
        </H1>
        <P>
                Enjoy the latest tweets and stay connected!
        </P>
        <Back welcome={true} >Go to Tweets </Back>

        </Container>
    )
}