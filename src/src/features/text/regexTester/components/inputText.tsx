import { Card, FormControl, Input, Typography } from '@mui/material';

const InputText = () => {
  return (
    <>
      <Typography variant="subtitle1">Text</Typography>
      <Card sx={{ height: '100%' }}>
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
            sx={{
              mx: 1,
              overflow: 'auto',
              height: '100%',
              width: '100%',
              alignItems: 'start',
            }}
          />
        </FormControl>
      </Card>
    </>
  );
};

export { InputText };
