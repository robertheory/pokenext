import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import names from '../../../public/names.json';

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const searchResults = useMemo(() => {
    if (!search) return [];

    return names.filter((p) => p.includes(search));
  }, [search]);

  return (
    <>
      <Flex
        w='90%'
        maxW='300px'
        bg='white'
        p='2'
        borderRadius='8px'
        direction='row'
        justify='flex-start'
        align='center'
        position='relative'
        gap={2}
      >
        <SearchIcon color='#3f3f3f' />
        <Input
          variant='unstyled'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Stack
          position='absolute'
          top='30px'
          right='0px'
          direction='column'
          w='300px'
          justify='flex-start'
          align='stretch'
          bg='white'
          spacing={4}
          borderRadius='8px'
        >
          {searchResults.map((resut) => (
            <Text
              w='100%'
              key={resut}
              color='#3f3f3f'
              fontSize='1.2rem'
              fontWeight='300'
              textAlign='center'
              borderRadius='8px'
              cursor='pointer'
              textTransform='capitalize'
              p='2'
              _hover={{
                bg: '#b5b5b5',
              }}
              onClick={() => router.push(`/pokemon/${resut}`)}
            >
              {resut}
            </Text>
          ))}
        </Stack>
      </Flex>
    </>
  );
};

export default Searchbar;
