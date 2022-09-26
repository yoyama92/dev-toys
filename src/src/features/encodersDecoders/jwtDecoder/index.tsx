import { useState } from 'react';

import { Box, styled } from '@mui/material';

import { DecodeResult } from './components/decodeResult';
import { JwtTokenInput } from './components/jwtTokenInput';

const headerHeight = 198;

const GridStyle = styled('div')(({}) => ({
  height: `calc(100% - ${headerHeight}px)`,
}));

const Main = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <GridStyle>
      <Box sx={{ my: 1 }}>
        <JwtTokenInput onChange={handleChange} />
      </Box>
      <Box sx={{ mt: 3, height: '100%' }}>
        <DecodeResult value={inputValue} />
      </Box>
    </GridStyle>
  );
};

const JwtDecoder = () => {
  return <Main />;
};

export { JwtDecoder };
