import { Card, FormControl, Input, Typography } from '@mui/material';

type JwtTokenInputProps = {
  onChange: (value: string) => void;
};

const JwtTokenInput = ({ onChange }: JwtTokenInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <Typography variant="subtitle1">Jwt Token</Typography>
      <Card>
        <FormControl
          sx={{ flexGrow: 1, p: 1, pl: 2, width: '100%' }}
          size="small"
        >
          <Input
            multiline
            spellCheck={false}
            onChange={handleChange}
            sx={{
              overflow: 'auto',
              height: '100%',
              width: '100%',
              alignItems: 'start',
            }}
            rows={5}
          />
        </FormControl>
      </Card>
    </>
  );
};

export { JwtTokenInput };
