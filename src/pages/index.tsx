import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { toCapital } from '../utils/formatting';

interface IPokeApiResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: {
    name: string;
    url: string;
  }[];
}

export default function Home({ results }: IPokeApiResponse) {
  const [search, setSearch] = useState('');

  const items = useMemo(() => {
    if (!search) return results;

    return results.filter((p) => p.name.includes(search));
  }, [results, search]);

  return (
    <>
      <Head>
        <title>PokéNext</title>
      </Head>

      <div className='w-100 flex flex-col items-strech justify-start p-0'>
        <header className='w-100 h-20 bg-[crimson] flex flex-row items-center justify-between p-8 text-center'>
          <h1 className='text-xl m-1'>PokéNext</h1>
          <p className='text-md m-2'>
            Feel the power of a Pokédex built with NextJS
          </p>
        </header>

        <input
          className='
      w-100
      m-2
      rounded
      p-2
      text-center
      text-black
      font-thin
      text-xl
      '
          type='text'
          name='search'
          id='search'
          onChange={({ target: { value } }) => setSearch(value)}
        />

        <ul className='w-100 p-0 m-0'>
          {items.map((p) => (
            <li
              key={p.name}
              className='w-100 text-center text-3xl font-thin p-4 border-b-2 border-b-stone-300
            bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300'
            >
              <Link href={`/pokemon/${p.name}`}>{toCapital(p.name)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<IPokeApiResponse>(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000'
  );

  const uppercased = data.results.map(({ name, url }) => ({
    url,
    name: toCapital(name),
  }));

  return { props: { ...data, result: uppercased }, revalidate: 60 * 60 * 24 };
};
