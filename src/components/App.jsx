import Home from 'page/Home';
import Tweets from 'page/Tweets';
import { Route, Routes, Navigate  } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="tweets" element={<Tweets/>} />
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
        
      </Routes>  
    <GlobalStyle />
    </>     
  );
};
