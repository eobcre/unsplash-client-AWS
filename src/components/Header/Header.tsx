import React from 'react';
import Nav from '../Header/Nav';
import Search from '../Header/Search';
import Icon from '../../assets/icon.svg';

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center border-b border-slate-200 p-3'>
        <div className='flex items-center gap-3'>
          <img src={Icon} alt='Icon' width={50} />
          <Search />
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
