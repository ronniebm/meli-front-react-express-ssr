import React from 'react';
import logoImg from '../../../../assets/images/Logo_ML.png';

const NavBar = ({ onSearch, setSearchItem }) => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar__box'>
          <img className='navbar__box-icon' src={logoImg}></img>
          <div className='navbar__box-search'>
            <input
              type='text'
              className='navbar__box-search__text'
              placeholder='Nunca dejes de buscar'
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button
              className='navbar__box-search__icon'
              onClick={onSearch}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
