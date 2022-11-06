import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from './Header';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Flex
      w='100vw'
      h='100vh'
      direction='column'
      justify='flex-start'
      align='stretch'
      bg='gray.200'
    >
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
