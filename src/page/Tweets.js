import { TweetsList } from "components/TweetsListH/TweetsList";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchUsers } from "redux/operations";
import { StatusFilter } from "components/StatusFilter/StatusFilter";


const Tweets = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? "/");
    
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <Link to={backLinkHref.current}> Go Back </Link>
            <StatusFilter />
            <div>{isLoading && 'Request in progress...'}</div>
            <TweetsList />
        </>
    )
};

export default Tweets;