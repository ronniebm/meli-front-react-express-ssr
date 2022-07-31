import React from 'react';

const ProdSum = ({data}) => {

  return (
    <div className='prod-sum'>
     <p className='prod-sum__header'>Descripción del producto</p>
     <p className='prod-sum__description'>{data.description}</p>
    </div>
  );
};

export default ProdSum;
