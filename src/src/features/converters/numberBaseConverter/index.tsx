import { useLocation } from 'react-router-dom';

import { Typography } from '@mui/material';

import { TitleComponent } from '@/components/title';

const NumberBaseConverter = () => {
  const location = useLocation();

  const title = 'Number Base Converter';
  return (
    <>
      <TitleComponent title={title} />
      <Typography>{location.pathname}</Typography>
    </>
  );
};

export { NumberBaseConverter };
