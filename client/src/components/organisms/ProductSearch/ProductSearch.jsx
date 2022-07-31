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
    <>
      {resultSearch
        ? resultSearch?.items.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })
        : refreshResult?.items.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })}
    </>
  );
};

export default ProductSearch;
