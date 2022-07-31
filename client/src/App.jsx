import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { searchItems } from './api/items';
import Breadcrumb from './components/molecules/Breadcrumb/Breadcrumb';
import NavBar from './components/molecules/NavBar/NavBar';
import ProductDetail from './components/organisms/ProductDetail/ProductDetail';
import ProductHome from './components/organisms/ProductHome';
import ProductSearch from './components/organisms/ProductSearch/ProductSearch';

const App = () => {
  let navigate = useNavigate();
  const [searchItem, setSearchItem] = useState(null);
  const [resultSearch, setResultSearch] = useState(null);

  const onSearch = () => {
    searchItems(searchItem.toString()).then((response) => {
      setResultSearch(response);
      console.log(response.items.slice(2, 4));
      navigate(`/items?search=${searchItem}`);
    });
  };

  return (
    <>
      <NavBar onSearch={onSearch} setSearchItem={setSearchItem} />
      <Routes>
        <Route
          path='/'
          element={<ProductHome />}
        />
        <Route
          path='/items'
          element={<ProductSearch resultSearch={resultSearch} />}
        />
        <Route
          path='/items/:id'
          element={<ProductDetail />}
        />
      </Routes>
    </>
  );
};

export default App;
