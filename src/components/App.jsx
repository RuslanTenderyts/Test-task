import Home from 'page/Home';
import Users from 'page/Users';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="tweets" element={<Users/>} />
        </Route>
        
      </Routes>  
    <GlobalStyle />
    </>     
  );
};
