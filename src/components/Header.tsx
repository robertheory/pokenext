import React from 'react';
import { FiStar } from 'react-icons/fi';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <header className='w-100 h-20 bg-[crimson] flex flex-row items-center justify-between p-8 text-center'>
      <h1 className='text-xl m-1 hidden md:block'>PokéNext</h1>

      <Searchbar />

      <button className='m-2 ml-8 bg-slate-100 rounded-full w-9 h-9 flex items-center justify-center'>
        <FiStar className='fill-red-600 text-red-600 text-2xl' />
      </button>
    </header>
  );
};

export default Header;
