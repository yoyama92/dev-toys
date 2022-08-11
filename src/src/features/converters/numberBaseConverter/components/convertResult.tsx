import { useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  Button,
  Card,
  FormControl,
  Input,
  Tooltip,
  Typography,
} from '@mui/material';

import { ConvertedNumber } from '../classes/convertedNumber';
import { Radix } from '../types/configuration';

type NumberBaseConverterProps = {
  value?: number;
  isFormatted: boolean;
};

type ConvertedValueComponentProps = {
  label: Radix;
  value: string;
};

const empty = (value?: string) => {
  if (value && value.length > 0) {
    return false;
  }
  return true;
};

const ConvertedValueComponent = ({
  label,
  value,
}: ConvertedValueComponentProps) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      setOpenTooltip(true);
      setTimeout(() => {
        setOpenTooltip(false);
      }, 1200);
    });
  };

  return (
    <Box sx={{ pb: 1 }}>
      <Typography variant="subtitle1">{label}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            width: '100%',
            mr: 1,
            height: 35,
            display: 'flex',
            alignItems: 'end',
          }}
        >
          <FormControl
            sx={{ flexGrow: 1, p: 1, py: 0.5, width: '100%' }}
            size="small"
          >
            <Input readOnly value={value} />
          </FormControl>
        </Card>
        <Tooltip
          open={openTooltip}
          arrow
          title="Copied!"
          placement="top-end"
          leaveDelay={1000}
        >
          <Button
            onClick={handleCopyButtonClick}
            disabled={empty(value)}
            sx={{ p: 0, minWidth: 35 }}
          >
            <Card
              sx={{
                px: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 35,
              }}
            >
              <ContentCopyIcon />
            </Card>
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

const ConvertResult = ({ value, isFormatted }: NumberBaseConverterProps) => {
  const convertedValue = new ConvertedNumber(value);
  const hexadecimal = convertedValue.getHexadecimal(isFormatted);
  const decimal = convertedValue.getDecimal(isFormatted);
  const octal = convertedValue.getOctal(isFormatted);
  const binary = convertedValue.getBinary(isFormatted);
  return (
    <>
      <ConvertedValueComponent label={'Hexadecimal'} value={hexadecimal} />
      <ConvertedValueComponent label={'Decimal'} value={decimal} />
      <ConvertedValueComponent label={'Octal'} value={octal} />
      <ConvertedValueComponent label={'Binary'} value={binary} />
    </>
  );
};

export { ConvertResult };
