import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getDetailItem } from '../../../api/items';
import ProdInfo from '../../molecules/ProdInfo/ProdInfo';
import ProdSum from '../../molecules/ProdSum/ProdSum';

const ProductDetail = () => {
  let params = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  // data fake para pruebas iniciales de renderizado

  useEffect(() => {
    getDetailItem(params.id).then(({ items }) => {
      setItemDetail(items);
    });
  }, []);

  return (
    <>
      {itemDetail && (
        <div className='product'>
          <div className='product-top'>
            <div className='product__img'>
              <img src={itemDetail.picture} alt='product-image' />
            </div>

            <div className='product__info prod-display-up'>
            <ProdInfo data={itemDetail} />
          </div>

            <div className='product-bottom'>
              <ProdSum data={itemDetail} />
            </div>
          </div>
          <div className='product__info prod-display-down'>
            <ProdInfo data={itemDetail} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
