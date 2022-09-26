import { useEffect, useState } from 'react';

import SegmentIcon from '@mui/icons-material/Segment';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  Typography,
} from '@mui/material';

import {
  Configurations,
  CronMode,
  GeneratedScheduleCount,
} from '../types/configuration';

type ConfigurationProps = {
  defaultValue: Configurations;
  onCronModeChanged: (value: CronMode) => void;
  onGeneratedScheduleCountChanged: (count: GeneratedScheduleCount) => void;
  onOutputFormatChanged: (format: string) => void;
};

export const Configuration = ({
  defaultValue,
  onCronModeChanged,
  onGeneratedScheduleCountChanged,
  onOutputFormatChanged,
}: ConfigurationProps) => {
  const { cronMode, generatedScheduleCount, outputFormat } = defaultValue;

  const [checked, setChecked] = useState(cronMode === 'SecondsIncludedMode');
  const [cronModeLabel, setCronModeLabel] = useState('');

  useEffect(() => {
    if (checked) {
      setCronModeLabel('Seconds included (6 - segment Cron)');
      onCronModeChanged('SecondsIncludedMode');
    } else {
      setCronModeLabel('Standard mode (5 - segment Cron)');
      onCronModeChanged('SecondsExcludedMode');
    }
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSelectChange = (
    event: SelectChangeEvent<GeneratedScheduleCount>,
  ) => {
    onGeneratedScheduleCountChanged(
      event.target.value as GeneratedScheduleCount,
    );
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onOutputFormatChanged(event.target.value);
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
            <SyncAltIcon />
          </CardContent>
          <Box sx={{ width: '100%' }}>
            <CardContent sx={{ py: 0, my: 0, flex: '1 0 auto' }}>
              <Typography variant="subtitle1">Cron Mode</Typography>
              <Typography variant="body1" color="text.secondary">
                Choose whatever Cron expression should includes seconds in its
                definition
              </Typography>
            </CardContent>
            <CardActions sx={{ m: 0, p: 0 }}>
              <FormControl sx={{ flexGrow: 1, mr: 4 }} size="small">
                <FormControlLabel
                  value="start"
                  control={<Switch checked={checked} onChange={handleChange} />}
                  label={cronModeLabel}
                  labelPlacement="start"
                />
              </FormControl>
            </CardActions>
          </Box>
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
            <SegmentIcon />
          </CardContent>
          <CardContent sx={{ py: 1, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Next scheduled dates</Typography>
            <Typography variant="body1" color="text.secondary">
              How many scheduled dates needs to be generated
            </Typography>
          </CardContent>
          <CardActions sx={{ py: 1 }}>
            <FormControl sx={{ flexGrow: 1, mr: 2 }} size="small">
              <Select
                defaultValue={generatedScheduleCount}
                onChange={handleSelectChange}
                sx={{ width: '5rem' }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
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
            <TextFormatIcon />
          </CardContent>
          <CardContent sx={{ py: 1, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Output format</Typography>
            <Typography variant="body1" color="text.secondary">
              Date time fomat of upcoming dates
            </Typography>
          </CardContent>
          <CardActions sx={{ py: 1 }}>
            <FormControl sx={{ flexGrow: 1, mr: 2 }} size="small">
              <Input
                defaultValue={outputFormat}
                onChange={handleFormatChange}
                sx={{ px: 1, minWidth: '200px' }}
              />
            </FormControl>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
