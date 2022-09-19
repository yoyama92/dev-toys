import {
  Box,
  Card,
  FormControl,
  Input,
  styled,
  Typography,
} from '@mui/material';

const Style = styled('div')(({ theme }) => ({
  height: `calc(100% - ${theme.spacing(1)})`,
}));

type PasswordProps = {
  values: string[];
};

const GeneratedPassword = ({ values }: PasswordProps) => {
  return (
    <Style>
      <Typography variant="subtitle1">Generated Password</Typography>
      {values.map((value, index) => {
        return (
          <Box>
            <Card
              key={`${index}-${value}`}
              sx={{
                m: 1,
                px: 1,
                width: '100%',
              }}
            >
              <FormControl
                sx={{
                  width: '100%',
                }}
              >
                <Input readOnly disableUnderline value={value} />
              </FormControl>
            </Card>
          </Box>
        );
      })}
    </Style>
  );
};

export { GeneratedPassword };
