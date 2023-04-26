import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { Loader } from "./Loader/Loader";
import { fetchImagesWithQuery } from "service/api";
import { ButtonLoadMore } from './Button/Button'
import { User } from "components/Users/Users";
import { Item, List } from "./UserList.stayled";

const getVisibleTasks = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter(user => user.id < 5);
    case statusFilters.followings:
      return users.filter(user => user.id > 5);
    default:
      return users;
  }
};

export const TaskList = () => {
  const users = useSelector(selectAllUsers);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleUsers = getVisibleTasks(users, statusFilter);

  return (
    <List>
      {visibleUsers.map(user => (
        <Item key={user.id}>
          <User user={user} />
        </Item>
      ))}
    </List>
  );
};


import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { Loader } from "./Loader/Loader";
import { fetchImagesWithQuery } from "service/api";
import { ButtonLoadMore } from './Button/Button'


export const App = () => {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setDisableBtn(false);

  }, [ search, page ] );

  useEffect(() => {
    if ( !disableBtn && images.length !== 0 && (totalHits / 12 > page)  ) {
      setDisableBtn(true);
    }  
  }, [ page, disableBtn, images, totalHits])

  useEffect(() => { 
    if(!search) {
      return;
    }
    setError(null);
    setDisableBtn(false);

    async function getFetch () {
      setIsLoading(true);
      try {
        const data = await fetchImagesWithQuery( search, page );
        setImages( prevState  => [ ...prevState, ...data.hits ]);
        setTotalHits( data.totalHits );
              
        } catch (error) {
        console.log(error)
        setError( error );
  
        } finally {
        setIsLoading( false );
      }
    };
    getFetch ();
  }, [search, page] );
  
  const handleFormSubmit = (value) => {
    if(value === search) {
      return alert('ведіть нове значення')
    }
    setImages([]);
    setSearch(value);
    setPage(1);
  }
  const handleMoreImage = () => {
    setPage( prevState => prevState + 1);
  }
 
  return (
    <>   
      <Toaster toastOptions={{ duration: 500}} />
      <Searchbar onSubmit={handleFormSubmit}/>

      {error && <p>{error.message}</p>}

      {isLoading && <Loader/>}

      {images.length > 0 && <ImageGallery images={images} />}

      {disableBtn && <ButtonLoadMore onClick={handleMoreImage} ></ButtonLoadMore> }
      
    </>
  );
}