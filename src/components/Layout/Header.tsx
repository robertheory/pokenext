import { Flex, Text } from '@chakra-ui/react';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <Flex
      w='100%'
      h='80px'
      direction='row'
      justify='space-between'
      align='center'
      bg='crimson'
      p='4'
    >
      <Text fontSize='2rem' fontWeight='700' color='#fafafa'>
        PokéNext
      </Text>

      <Searchbar />
    </Flex>
  );
};

export default Header;
