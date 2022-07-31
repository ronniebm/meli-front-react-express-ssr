import React from 'react';
import Button from '../../atoms/Button/Button';

const ProdInfo = ({ data }) => {
  return (
    <div className='prod-info'>
      <p className='prod-info__status'>{data.condition}</p>
      <p className='prod-info__title'>{data.title}</p>
      <p className='prod-info__price'>$ {data.price.amount}</p>
      <Button>Comprar</Button>
    </div>
  );
};

export default ProdInfo;
