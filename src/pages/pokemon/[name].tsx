/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import names from '../../../public/names.json';
import { IPokemon } from '../../DTO/IPokemon';
import { toCapital } from '../../utils/formatting';

const Pokemon = (pokemon: IPokemon) => {
  return (
    <>
      <Head>
        <title>PokéNext | {toCapital(pokemon.name)}</title>
      </Head>

      <div className='w-100 flex flex-col items-strech justify-start p-0'>
        <header className='w-100 h-20 bg-[crimson] flex flex-row items-center justify-between p-8 text-center'>
          <Link href='/' className='hover:text-slate-200 active:text-slate-700'>
            <FaArrowLeft />
          </Link>
          <h1 className='text-3xl m-1'>{toCapital(pokemon.name)}</h1>
          <p className='text-2xl m-2'># {pokemon.id}</p>
        </header>

        <div className='w-100 flex flex-col items-center justify-start'>
          <img
            className='w-60 m-2 rounded bg-gradient-to-tr from-slate-400 via-slate-300 to-slate-500'
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <div className='w-100 flex flex-row items-center justify-center'>
            {pokemon.types.map((t) => (
              <p className='m-2 bg-slate-500 rounded p-2' key={t.type.name}>
                {toCapital(t.type.name)}
              </p>
            ))}
          </div>

          <h1 className='text-2xl font-thin  mt-2 mb-2'>
            Base experience: {pokemon.base_experience}
          </h1>

          <h1 className='text-2xl font-thin  mt-2 mb-2'>
            Weight: {pokemon.weight} Kg
          </h1>

          <h1 className='text-2xl font-thin  mt-2 mb-2'>
            Specie: {toCapital(pokemon.species.name)}
          </h1>

          <h1 className='text-2xl font-thin border-b-white border-b-2 mt-2 mb-2'>
            Abilities
          </h1>

          <ul className='w-100 p-0 m-0 mb-4'>
            {pokemon.abilities.map((a) => (
              <li
                className='m-2 text-l font-semibold text-center'
                key={a.ability.name}
              >
                {toCapital(a.ability.name)}
              </li>
            ))}
          </ul>

          <h1 className='text-2xl font-thin border-b-white border-b-2 mt-2 mb-2'>
            Forms
          </h1>

          <ul className='w-100 p-0 m-0 mb-4'>
            {pokemon.forms.map((f) => (
              <li className='m-2 text-l font-semibold text-center' key={f.name}>
                {toCapital(f.name)}
              </li>
            ))}
          </ul>

          <h1 className='text-2xl font-thin border-b-white border-b-2 mt-2 mb-2'>
            Moves
          </h1>

          <ul className='w-100 p-0 m-0 mb-4'>
            {pokemon.moves.map((m) => (
              <li
                className='m-2 text-l font-semibold text-center'
                key={m.move.name}
              >
                {toCapital(m.move.name)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = names.map((n) => ({ params: { name: n } })).slice(0, 9);

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params;

  const { data } = await axios.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  return { props: data };
};

export default Pokemon;
