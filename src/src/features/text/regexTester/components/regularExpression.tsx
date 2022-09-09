import { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material//Clear';
import {
  Card,
  FormControl,
  IconButton,
  Input,
  Typography,
} from '@mui/material';

type RegularExpressionProps = {
  defaultValue: string;
  onChange: (value: string) => void;
};

const RegularExpression = ({
  defaultValue,
  onChange,
}: RegularExpressionProps) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Typography variant="subtitle1">Regular expression</Typography>
      <Card>
        <FormControl sx={{ flexGrow: 1, p: 1, width: '100%' }} size="small">
          <Input
            value={value}
            sx={{ px: 1 }}
            onChange={handleChange}
            endAdornment={
              value ? (
                <IconButton size="small" onClick={() => setValue('')}>
                  <ClearIcon />
                </IconButton>
              ) : undefined
            }
          />
        </FormControl>
      </Card>
    </>
  );
};

export { RegularExpression };
