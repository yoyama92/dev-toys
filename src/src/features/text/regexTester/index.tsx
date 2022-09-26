import { Box, styled } from '@mui/material';

import { Configuration } from './components/configuration';
import { InputText } from './components/inputText';
import { RegularExpression } from './components/regularExpression';
import { Configurations } from './types/configuration';

const headerHeight = 251;

const GridStyle = styled('div')(({}) => ({
  height: `calc(100% - ${headerHeight}px)`,
}));

const RegexTester = () => {
  const defaultConfiguration: Configurations = {};

  const handleOptionChange = (value: Configurations) => {
    console.log(value);
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <GridStyle>
      <Box sx={{ my: 1, minWidth: '500px' }}>
        <Configuration
          defaultValue={defaultConfiguration}
          onOptionChanged={handleOptionChange}
        />
      </Box>
      <Box sx={{ my: 4 }}>
        <RegularExpression defaultValue={''} onChange={handleChange} />
      </Box>
      <Box sx={{ my: 4, height: '100%' }}>
        <InputText />
      </Box>
    </GridStyle>
  );
};

export { RegexTester };
