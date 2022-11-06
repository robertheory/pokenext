/* eslint-disable @next/next/no-img-element */
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Image, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import names from '../../../public/names.json';
import { IPokemon } from '../../DTO/IPokemon';

const colors = {
  normal: '#bfbfbf',
  fighting: '#d87c58',
  flying: '#999ade',
  poison: '#925192',
  ground: '#dea761',
  rock: '#897864',
  bug: '#b1c967',
  ghost: '#c195dc',
  steel: '#49769c',
  fire: '#cf1414',
  water: '#1689de',
  grass: '#47a047',
  electric: '#e6b700',
  psychic: '#fa43b8',
  ice: '#98c3de',
  dragon: '#89315d',
  dark: '#282433',
  fairy: '#dca0ce',
  unknown: '#545454',
  shadow: '#364163',
};

const Pokemon = (pokemon: IPokemon) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>PokéNext | {pokemon.name}</title>
      </Head>

      <Flex
        w='100%'
        h='100%'
        bg='white'
        direction='column'
        align='center'
        overflowY='scroll'
        overflowWrap='normal'
      >
        <Stack
          w='100%'
          maxW='600px'
          direction='row'
          justify='space-between'
          align='center'
          p='4'
        >
          <IconButton
            aria-label='Go Back'
            icon={<ArrowBackIcon fontSize='2xl' />}
            variant='ghost'
            onClick={() => router.back()}
          />

          <Text fontSize='2rem' fontWeight='600' textTransform='capitalize'>
            {pokemon.name}
          </Text>

          <Text fontSize='2rem' fontWeight='600' textTransform='capitalize'>
            # {pokemon.id}
          </Text>
        </Stack>

        <Image
          w='200px'
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <Stack w='100%' direction='column' justify='flex-start' align='center'>
          <Stack direction='row' w='100%' justify='center'>
            {pokemon.types.map((type) => (
              <Text
                key={type.type.name}
                bg={colors[type.type.name]}
                color='white'
                w='fit-content'
                p='2'
                borderRadius='4px'
                textTransform='uppercase'
                fontWeight='900'
              >
                {type.type.name}
              </Text>
            ))}
          </Stack>

          <Text w='fit-content' borderRadius='4px'>
            Height: {pokemon.height}
          </Text>

          <Text w='fit-content' borderRadius='4px'>
            Weight: {pokemon.weight}
          </Text>
        </Stack>
      </Flex>
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
