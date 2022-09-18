import { ReactNode, useEffect, useState } from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Input,
  Paper,
  Switch,
  SwitchProps,
  Typography,
} from '@mui/material';

import { Configurations } from '../types/configuration';

type ConfigurationProps = {
  defaultValue: Configurations;
  onConfigurationChanged: (value: Configurations) => void;
};

type OptionProps = {
  defaultValue: Configurations;
  onOptionChanged: (value: Configurations) => void;
};

type BaseOptionComponentProps = {
  title: string;
  summary: string;
  children: ReactNode;
};

const OptionComponent = ({
  title,
  summary,
  children,
}: BaseOptionComponentProps) => {
  return (
    <Paper sx={{ p: 1, mb: 1 }} elevation={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {summary}
          </Typography>
        </Box>
        <FormControl sx={{ mr: 1 }} size="small">
          {children}
        </FormControl>
      </Box>
    </Paper>
  );
};

const SwitchComponent = (props: SwitchProps) => {
  const { defaultChecked, onChange } = props;
  return (
    <FormControlLabel
      value="start"
      control={<Switch defaultChecked={defaultChecked} onChange={onChange} />}
      labelPlacement="start"
      label=""
    />
  );
};

const Options = ({ defaultValue, onOptionChanged }: OptionProps) => {
  const {
    count,
    length,
    numbers,
    symbols,
    lowercase,
    uppercase,
    excludeSimilarCharacters,
    strict,
  } = defaultValue;

  const [option, setOption] = useState(defaultValue);

  const handleLenghtChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!Number.isNaN(parseInt(value))) {
      setOption({
        ...option,
        length: parseInt(value),
      });
    } else {
      setOption({
        ...option,
        length: 0,
      });
    }
  };

  const handleCountChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!Number.isNaN(parseInt(value))) {
      setOption({
        ...option,
        count: parseInt(value),
      });
    } else {
      setOption({
        ...option,
        count: 0,
      });
    }
  };

  const handleNumbersChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setOption({
      ...option,
      numbers: checked,
    });
  };

  const handleSymbolsChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setOption({
      ...option,
      symbols: checked,
    });
  };

  const handleLowercaseChanged = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    setOption({
      ...option,
      lowercase: checked,
    });
  };

  const handleUppercaseChanged = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    setOption({
      ...option,
      uppercase: checked,
    });
  };

  const handleExcludeSimilarCharactersChanged = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    setOption({
      ...option,
      excludeSimilarCharacters: checked,
    });
  };

  const handleStrictChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setOption({
      ...option,
      strict: checked,
    });
  };

  useEffect(() => {
    onOptionChanged(option);
  }, [option]);

  return (
    <>
      <OptionComponent title="Count" summary="Amout of generating password">
        <Input
          defaultValue={count}
          onChange={handleCountChanged}
          sx={{ px: 1 }}
        />
      </OptionComponent>
      <OptionComponent title="Lenght" summary="Length of password">
        <Input
          defaultValue={length}
          onChange={handleLenghtChanged}
          sx={{ px: 1 }}
        />
      </OptionComponent>
      <OptionComponent title="Numbers" summary="Put numbers in password">
        <SwitchComponent
          defaultChecked={numbers}
          onChange={handleNumbersChanged}
        />
      </OptionComponent>
      <OptionComponent title="Symbols" summary="Put symbols in password">
        <SwitchComponent
          defaultChecked={symbols}
          onChange={handleSymbolsChanged}
        />
      </OptionComponent>
      <OptionComponent title="Lowercase" summary="Put lowercase in password">
        <SwitchComponent
          defaultChecked={lowercase}
          onChange={handleLowercaseChanged}
        />
      </OptionComponent>
      <OptionComponent title="Uppercase" summary="Put uppercase in password">
        <SwitchComponent
          defaultChecked={uppercase}
          onChange={handleUppercaseChanged}
        />
      </OptionComponent>
      <Box></Box>
      <OptionComponent
        title="Exclude Similar Characters"
        summary="Exclude similar chars, like 'i' and 'l'."
      >
        <SwitchComponent
          defaultChecked={excludeSimilarCharacters}
          onChange={handleExcludeSimilarCharactersChanged}
        />
      </OptionComponent>
      <OptionComponent
        title="Strict"
        summary="Password must include at least one character from each pool."
      >
        <SwitchComponent
          defaultChecked={strict}
          onChange={handleStrictChanged}
        />
      </OptionComponent>
    </>
  );
};

export const Configuration = ({
  defaultValue,
  onConfigurationChanged,
}: ConfigurationProps) => {
  const handleOptionChanged = (value: Configurations) => {
    onConfigurationChanged(value);
  };

  return (
    <>
      <Typography variant="subtitle1">Configuration</Typography>
      <Card sx={{ py: 1, mb: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <CardContent>
            <SettingsIcon />
          </CardContent>
          <CardContent sx={{ py: 1.5, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Options</Typography>
            <Options
              defaultValue={defaultValue}
              onOptionChanged={handleOptionChanged}
            />
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
