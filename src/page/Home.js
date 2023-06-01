import { useEffect } from "react";
import { Welcome } from "components/Welcome/Welcome";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
      }, []);

    return (
        <>
            <Welcome />
        </>
    )
};

export default Home;