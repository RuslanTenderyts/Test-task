import { Tweet } from "components/TweetH/Tweet";
import { Item, List } from "./TweetsList.stayled";
import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";
import { fetchTweets } from "components/service/App";
import { Button } from 'components/Button/Button'


export const TweetsList = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [disableBtn, setDisableBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ( !disableBtn && tweets.length !== 0  ) {
      setDisableBtn(true);
    }  
  }, [ page, disableBtn, tweets ])

  useEffect(() => { 
    setError(null);
    setDisableBtn(false);

    async function getFetch () {
      setIsLoading(true);
      try {
        const data = await fetchTweets();
        setTweets(data);
                      
        } catch (error) {
        console.log(error)
        setError( error );
  
        } finally {
        setIsLoading( false );
      }
    };
    getFetch ();
  }, [] );
  
  const handleMoreImage = () => {
    setPage( prevState => prevState + 1);
  }
 
  return (
    <>   
      <Toaster toastOptions={{ duration: 500}} />
     
      {error && <p>{error.message}</p>}

      {isLoading && <Loader/>}

      {tweets.length > 0 &&   
          <List>
            {tweets.map(tweet => (
              <Item key={tweet.id}>
                <Tweet tweet={tweet} />
              </Item>
            ))}
          </List> }

      {disableBtn && <Button onClick={handleMoreImage} ></Button> }
      
    </>
  );
}
