import {
  Card,
  FormControl,
  Input,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

const Style = styled('div')(({ theme }) => ({
  height: `calc(100% - ${theme.spacing(1)})`,
}));

type NextScheduledDatesProps = {
  values: string[];
};

const NextScheduledDates = ({ values }: NextScheduledDatesProps) => {
  const theme = useTheme();
  const value = values.join('\n');
  return (
    <Style>
      <Typography variant="subtitle1">Next scheduled dates</Typography>
      <Card sx={{ height: `calc(100% -  ${theme.spacing(2)})` }}>
        <FormControl
          sx={{
            flexGrow: 1,
            m: 1,
            width: '100%',
            minHeight: '120px',
            height: '100%',
          }}
          size="small"
        >
          <Input
            multiline
            readOnly
            disableUnderline
            sx={{
              mx: 1,
              overflow: 'auto',
              height: '100%',
              width: '100%',
              alignItems: 'start',
            }}
            value={value}
          />
        </FormControl>
      </Card>
    </Style>
  );
};

export { NextScheduledDates };
