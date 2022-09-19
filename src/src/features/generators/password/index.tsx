import { useEffect, useState } from 'react';

import { Box, styled } from '@mui/material';
import generator from 'generate-password-browser';

import { Configuration } from './components/configuration';
import { GeneratedPassword } from './components/generatedPassword';
import { Configurations } from './types/configuration';

const headerHeight = 470;

const GridStyle = styled('div')(({}) => ({
  height: `calc(100% - ${headerHeight}px)`,
}));

const Main = () => {
  const defaultConfigration = {
    count: 5,
    length: 10,
    numbers: false,
    symbols: false,
    lowercase: true,
    uppercase: true,
    excludeSimilarCharacters: false,
    exclude: '',
    strict: false,
  };

  const [configuration, setConfigration] =
    useState<Configurations>(defaultConfigration);

  const handleConfigrationChanged = (value: Configurations) => {
    setConfigration(value);
  };

  const [passwords, setPasswords] = useState<string[]>([]);

  useEffect(() => {
    const {
      count,
      length,
      numbers,
      symbols,
      lowercase,
      uppercase,
      excludeSimilarCharacters,
      exclude,
      strict,
    } = configuration;
    const values = generator.generateMultiple(count, {
      length: length,
      numbers: numbers,
      symbols: symbols,
      lowercase: lowercase,
      uppercase: uppercase,
      excludeSimilarCharacters: excludeSimilarCharacters,
      exclude: exclude,
      strict: strict,
    });
    setPasswords(values);
  }, [configuration]);

  return (
    <GridStyle>
      <Box sx={{ my: 1 }}>
        <Configuration
          defaultValue={defaultConfigration}
          onConfigurationChanged={handleConfigrationChanged}
        />
      </Box>
      <Box sx={{ mt: 3, height: '100%' }}>
        <GeneratedPassword values={passwords} />
      </Box>
    </GridStyle>
  );
};

const Password = () => {
  return <Main />;
};

export { Password };
