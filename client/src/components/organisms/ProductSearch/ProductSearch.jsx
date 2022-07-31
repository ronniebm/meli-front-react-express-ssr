import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchItems } from '../../../api/items';
import ItemCard from '../../molecules/ItemCard/ItemCard';

const ProductSearch = ({ resultSearch }) => {
  const [searchParams] = useSearchParams();
  const [refreshResult, setRefreshResult] = useState(null);

  useEffect(() => {
    searchItems(searchParams.get('search').toString()).then((response) => {
      setRefreshResult(response);
      console.log(response);
    });
  }, [searchParams]);

  return (
    <div className='product-search'>
      {resultSearch
        ? resultSearch?.items.map((item) => {
            return (
              <div className='product-search__item' key={item.id}>
                <ItemCard item={item} key={item.id} />
              </div>
            );
          })
        : refreshResult?.items.map((item) => {
            return (
              <div className='product-search__item' key={item.id}>
                <ItemCard item={item} key={item.id} />
              </div>
            );
          })}
    </div>
  );
};

export default ProductSearch;
