import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation";
import { Container, Header } from "./Layout.styled"

export const Layout = () => {
    return (
        <Container>
            <Header>
                <Navigation />
            </Header>
            <main>
                <Outlet />
            </main>
        </Container>       
    )
};