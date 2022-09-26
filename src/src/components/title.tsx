import { Typography } from '@mui/material';

export const TitleComponent = ({ title }: { title: string }) => {
  return (
    <Typography component="h2" variant="h5">
      {title}
    </Typography>
  );
};
