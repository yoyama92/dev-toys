import { useState } from 'react';

import { Box, styled } from '@mui/material';

import { ConvertedNumber } from './classes/convertedNumber';
import { Configuration } from './components/configuration';
import { ConvertResult } from './components/convertResult';
import { InputNumber } from './components/inputNumber';
import { Configurations, Radix } from './types/configuration';
import { parseValue } from './utils/converter';

const headerHeight = 420;

const GridStyle = styled('div')(({ theme }) => ({
  height: `calc(100% - ${headerHeight}px)`,
  paddingTop: theme.spacing(1),
}));

const NumberBaseConverter = () => {
  const defaultConfiguration: Configurations = {
    isFormatted: true,
    inputType: 'Binary',
  };

  const [isFormatted, setIsFormatted] = useState<boolean>(
    defaultConfiguration.isFormatted,
  );

  const [inputType, setInputType] = useState<Radix>(
    defaultConfiguration.inputType,
  );

  const [inputValue, setInputValue] = useState<ConvertedNumber>(
    new ConvertedNumber(),
  );

  const handleIsFormattedChange = (isFormatted: boolean) => {
    setIsFormatted(isFormatted);
  };

  const handleInputTypeChange = (inputType: Radix) => {
    setInputType(inputType);
  };

  const handleChange = (value: string) => {
    const parsedValue = parseValue(value, inputType);
    setInputValue(new ConvertedNumber(parsedValue));
  };

  return (
    <GridStyle>
      <Box sx={{ my: 1, minWidth: '500px' }}>
        <Configuration
          defaultValue={defaultConfiguration}
          onIsFormattedChanged={handleIsFormattedChange}
          onInputTypeChanged={handleInputTypeChange}
        />
      </Box>
      <Box sx={{ my: 4 }}>
        <InputNumber defaultValue={''} onChange={handleChange} />
      </Box>
      <Box sx={{ my: 4, height: '100%' }}>
        <ConvertResult value={inputValue} isFormatted={isFormatted} />
      </Box>
    </GridStyle>
  );
};

export { NumberBaseConverter };
