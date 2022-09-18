import { useState } from 'react';

import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  Typography,
} from '@mui/material';

import {
  Configurations,
  numberBaseFormats,
  Radix,
} from '../types/configuration';

type ConfigurationProps = {
  defaultValue: Configurations;
  onIsFormattedChanged: (value: boolean) => void;
  onInputTypeChanged: (inputType: Radix) => void;
};

export const Configuration = ({
  defaultValue,
  onIsFormattedChanged,
  onInputTypeChanged,
}: ConfigurationProps) => {
  const { isFormatted, inputType } = defaultValue;
  const [formatNumberLabel, setFormatNumberLabel] = useState(
    isFormatted ? 'On' : 'Off',
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setFormatNumberLabel(checked ? 'On' : 'Off');
    onIsFormattedChanged(checked);
  };

  const handleSelectChange = (event: SelectChangeEvent<Radix>) => {
    onInputTypeChanged(event.target.value as Radix);
  };

  return (
    <>
      <Typography variant="subtitle1">Configuration</Typography>
      <Card sx={{ py: 1, mb: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CardContent
            sx={{
              py: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextFormatIcon />
          </CardContent>
          <CardContent sx={{ py: 0, my: 0, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Format number</Typography>
          </CardContent>
          <CardActions sx={{ m: 0, p: 0 }}>
            <FormControl sx={{ flexGrow: 1, mr: 4 }} size="small">
              <FormControlLabel
                value="start"
                control={
                  <Switch
                    defaultChecked={isFormatted}
                    onChange={handleChange}
                  />
                }
                label={formatNumberLabel}
                labelPlacement="start"
              />
            </FormControl>
          </CardActions>
        </Box>
      </Card>
      <Card sx={{ mt: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CardContent sx={{ py: 1, display: 'flex', alignItems: 'center' }}>
            <SyncAltIcon />
          </CardContent>
          <CardContent sx={{ py: 1, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Input type</Typography>
            <Typography variant="body1" color="text.secondary">
              Select which input type you want to use
            </Typography>
          </CardContent>
          <CardActions sx={{ py: 1 }}>
            <FormControl sx={{ flexGrow: 1, mr: 2 }} size="small">
              <Select
                defaultValue={inputType}
                onChange={handleSelectChange}
                sx={{ width: '10rem' }}
              >
                {numberBaseFormats
                  .sort((a, b) => a.baseNumber - b.baseNumber)
                  .map((numberBaseFormat) => {
                    const { radix } = numberBaseFormat;
                    return (
                      <MenuItem key={radix} value={radix}>
                        {radix}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
