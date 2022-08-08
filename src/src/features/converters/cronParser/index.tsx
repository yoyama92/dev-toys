import { useEffect, useState } from 'react';

import { Box, styled } from '@mui/material';

import { Crontab } from './classess/crontab';
import { Configuration } from './components/configuration';
import { NextScheduledDates } from './components/nextScheduledDates';
import { UserCronExpression } from './components/userCronExpression';
import {
  Configurations,
  CronMode,
  GeneratedScheduleCount,
} from './types/configuration';

const headerHeight = 420;

const GridStyle = styled('div')(({ theme }) => ({
  height: `calc(100% - ${headerHeight}px)`,
  paddingTop: theme.spacing(1),
}));

const CronParser = () => {
  const defaultConfiguration: Configurations = {
    cronMode: 'SecondsIncludedMode',
    generatedScheduleCount: 5,
    outputFormat: 'yyyy-MM-dd HH:mm:ss',
  };

  const defaultCronWithSeconds = '* * * * * *';
  const defaultCronWithoutSeconds = '* * * * *';
  const defaultCron =
    defaultConfiguration.cronMode == 'SecondsIncludedMode'
      ? defaultCronWithSeconds
      : defaultCronWithoutSeconds;

  const [nextScheduledDates, setNextScheduledDates] = useState<string[]>([]);
  const [cronMode, setCronMode] = useState<CronMode>(
    defaultConfiguration.cronMode,
  );

  const [outputFormat, setOutputFormat] = useState<string>(
    defaultConfiguration.outputFormat,
  );

  const [generatedScheduleCount, setGeneratedScheduleCount] = useState<number>(
    defaultConfiguration.generatedScheduleCount,
  );

  const [cronExpression, setCronExpression] = useState<string>(defaultCron);

  useEffect(() => {
    const crontab = new Crontab(
      cronExpression,
      cronMode === 'SecondsIncludedMode',
    );
    const values = [...Array(generatedScheduleCount)]
      .map(() => {
        return crontab.getNext(outputFormat);
      })
      .filter((value) => {
        return value && value.length > 0;
      });

    if (values.length > 0) {
      setNextScheduledDates(values);
    }
  }, [cronExpression, cronMode, generatedScheduleCount, outputFormat]);

  const handleCronModeChange = (cronMode: CronMode) => {
    setCronMode(cronMode);
  };

  const handleGeneratedScheduleCountChange = (
    count: GeneratedScheduleCount,
  ) => {
    setGeneratedScheduleCount(count);
  };

  const handleOutputFormatChange = (format: string) => {
    setOutputFormat(format);
  };

  const handleChange = (value: string) => {
    setCronExpression(value);
  };

  return (
    <GridStyle>
      <Box sx={{ my: 1, minWidth: '560px' }}>
        <Configuration
          defaultValue={defaultConfiguration}
          onCronModeChanged={handleCronModeChange}
          onGeneratedScheduleCountChanged={handleGeneratedScheduleCountChange}
          onOutputFormatChanged={handleOutputFormatChange}
        />
      </Box>
      <Box sx={{ my: 2 }}>
        <UserCronExpression
          defaultValue={defaultCron}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ my: 2, height: '100%' }}>
        <NextScheduledDates values={nextScheduledDates} />
      </Box>
    </GridStyle>
  );
};

export { CronParser };
