import { useLocation } from 'react-router-dom';

import { Typography } from '@mui/material';

const CronParser = () => {
  const location = useLocation();

  return <Typography>{location.pathname}</Typography>;
};

export { CronParser };
