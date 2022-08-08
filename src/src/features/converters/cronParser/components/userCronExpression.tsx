import { Card, FormControl, Input, Typography } from '@mui/material';

type UserCronExpressionProps = {
  defaultValue: string;
  onChange: (value: string) => void;
};

const UserCronExpression = ({
  defaultValue,
  onChange,
}: UserCronExpressionProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <Typography variant="subtitle1">Cron expression parser</Typography>
      <Card>
        <FormControl sx={{ flexGrow: 1, p: 1, width: '100%' }} size="small">
          <Input
            defaultValue={defaultValue}
            sx={{ px: 1 }}
            onChange={handleChange}
          />
        </FormControl>
      </Card>
    </>
  );
};

export { UserCronExpression };
