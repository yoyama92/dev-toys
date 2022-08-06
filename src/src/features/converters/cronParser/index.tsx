import { useLocation } from 'react-router-dom';

import { Typography } from '@mui/material';

import { TitleComponent } from '@/components/title';

const CronParser = () => {
  const location = useLocation();

  const title = 'Cron Parser';
  return (
    <>
      <TitleComponent title={title} />
      <Typography>{location.pathname}</Typography>
    </>
  );
};

export { CronParser };
