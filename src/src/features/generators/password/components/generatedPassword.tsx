import { useEffect, useState } from 'react';

import {
  Box,
  Card,
  FormControl,
  Input,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';

const Style = styled('div')(({ theme }) => ({
  height: `calc(100% - ${theme.spacing(1)})`,
}));

type PasswordsProps = {
  values: string[];
};

const PasswordComponent = ({ value }: { value: string }) => {
  const [isOpened, setIsOpend] = useState(false);
  const handleOnClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      setIsOpend(true);
    });
  };

  useEffect(() => {
    if (isOpened) {
      setTimeout(() => {
        setIsOpend(false);
      }, 1500);
    }
  }, [isOpened]);

  return (
    <Tooltip open={isOpened} arrow title="Copied!" placement="top-start">
      <Card
        sx={{
          m: 1,
          px: 1,
          width: '100%',
        }}
        onClick={handleOnClick}
      >
        <FormControl
          sx={{
            width: '100%',
          }}
        >
          <Input readOnly disableUnderline value={value} />
        </FormControl>
      </Card>
    </Tooltip>
  );
};

const GeneratedPassword = ({ values }: PasswordsProps) => {
  return (
    <Style>
      <Typography variant="subtitle1">Generated Password</Typography>
      {values.map((value) => {
        return (
          <Box key={`${value}`}>
            <PasswordComponent value={value} />
          </Box>
        );
      })}
    </Style>
  );
};

export { GeneratedPassword };
