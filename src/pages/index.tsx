import { Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéNext</title>
      </Head>

      <Stack direction='column' w='100%' justify='center' align='center'>
        <Text fontSize='2rem'> HOME</Text>
      </Stack>
    </>
  );
}
