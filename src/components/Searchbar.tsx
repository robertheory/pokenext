import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { toCapital } from '../utils/formatting';
import names from '../../public/names.json';
import SearchResults from './SearchResults';

interface IPokeApiResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: {
    name: string;
    url: string;
  }[];
}

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const items = useMemo(() => {
    if (!search) return [];

    return names.filter((p) => p.includes(search));
  }, [search]);

  return (
    <>
      <div
        className='
    flex-1 max-w-[400px] w-100 m-2 p-2
    mr-auto
    ml-auto
    flex flex-row items-start justify-between flex-wrap
    bg-slate-100 rounded 
    '
      >
        <div className='w-100 flex flex-row items-center justify-between'>
          <button>
            <FiSearch className='text-slate-500 text-2xl' />
          </button>
          <input
            className='
        w-[100%] flex-1 m-0 p-0 pl-4
        text-black font-thin text-xl bg-slate-100
        outline-none
        '
            type='text'
            name='search'
            id='search'
            onChange={({ target: { value } }) => setSearch(value)}
          />
        </div>
      </div>

      <SearchResults items={items} />
    </>
  );
};

export default Searchbar;

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { data } = await axios.get<IPokeApiResponse>(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000'
  );

  const uppercased = data.results.map((n) => toCapital(n.name));

  return { props: { ...data, result: uppercased } };
};
