import React from 'react';
import { Link } from 'react-router-dom';

import shipping from '../../../../assets/images/ic_shipping@2x.png';

const ItemCard = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }}>
      <div className='item-card'>
        <div className='item-card__img'>
          <img src={item.picture} alt='item-img' />
        </div>

        <div className='item-card__data'>
          <div className='item-card__data-top'>
            <span className='item-card__data-top__price'>
              ${item.price.amount}
              {item.free_shipping && (
                <img
                  src={shipping}
                  alt='icon-shipping'
                  className='item-card__data-top__shipping'
                />
              )}
            </span>
          </div>

          <div className='item-card__data-bottom'>
            <p className='item-card__data-bottom__title'>{item.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
