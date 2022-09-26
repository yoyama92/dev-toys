import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { Conversion, Indentation, Setting } from '../types/configuration';

export const Configuration = ({
  defaultSetting,
  onConversionChanged,
  onIndentationChanged,
}: {
  defaultSetting: Setting;
  onConversionChanged: (value: Conversion) => void;
  onIndentationChanged: (value: Indentation) => void;
}) => {
  const handleConversionChange = (event: SelectChangeEvent) => {
    onConversionChanged(event.target.value as Conversion);
  };

  const handleIndentationChange = (event: SelectChangeEvent) => {
    onIndentationChanged(event.target.value as Indentation);
  };

  return (
    <>
      <Typography variant="subtitle1">Configuration</Typography>
      <Card sx={{ mb: 1 }}>
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
            <SyncAltIcon />
          </CardContent>
          <CardContent sx={{ py: 1, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Conversion</Typography>
            <Typography variant="body1" color="text.secondary">
              Select which conversion mode you want to use
            </Typography>
          </CardContent>
          <CardActions sx={{ py: 1 }}>
            <FormControl sx={{ flexGrow: 1, mr: 2 }} size="small">
              <Select
                defaultValue={defaultSetting.conversion}
                onChange={handleConversionChange}
                sx={{ width: 'fit-content' }}
              >
                <MenuItem value="JsonToYaml">Json to Yaml</MenuItem>
                <MenuItem value="YamlToJson">Yaml to Json</MenuItem>
              </Select>
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
            <SpaceBarIcon />
          </CardContent>
          <CardContent sx={{ py: 1, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Indentation</Typography>
          </CardContent>
          <CardActions sx={{ py: 1 }}>
            <FormControl sx={{ flexGrow: 1, mr: 2 }} size="small">
              <Select
                defaultValue={defaultSetting.indentation}
                onChange={handleIndentationChange}
                sx={{ width: 'fit-content' }}
              >
                <MenuItem value="TwoSpaces">2 spaces</MenuItem>
                <MenuItem value="FourSpaces">4 spaces</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
