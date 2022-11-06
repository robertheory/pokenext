import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

export const theme = extendTheme(
  withDefaultVariant({
    variant: 'solid',
  }),
  withDefaultColorScheme({
    colorScheme: 'red',
  }),
  {
    fonts: {
      heading: 'Roboto, sans-serif',
      body: 'Roboto, sans-serif',
    },
    styles: {
      global: {
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          bg: 'bg.200',
          color: 'gray.500',
          '&::placeholder': {
            color: 'gray.500',
          },
        },
      },
    },
  }
);
