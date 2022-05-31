import React from 'react';
import Link from 'next/link';
import { toCapital } from '../utils/formatting';

const SearchResults = ({ items }: { items: string[] }) => {
  return (
    <ul className='absolute max-w-[300px] w-[100%] ml-auto mr-auto top-[55px] left-0 right-0 rounded overflow-y-auto max-h-[300px]'>
      {items.map((i) => (
        <li
          key={i}
          className='w-100 text-neutral-100 m-0 p-2
    bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300 
    font-semibold uppercase
    '
        >
          <Link href={`/pokemon/${i}`}>{toCapital(i)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
