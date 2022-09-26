import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  Paper,
  styled,
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
        <FormControl
          sx={{
            mr: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          size="small"
        >
          {children}
        </FormControl>
      </Box>
    </Paper>
  );
};

type SwitchProps = {
  label?: string;
  disabled?: boolean;
  defaultChecked: boolean;
  onChange: (checked: boolean) => void;
};

const SwitchComponent = (props: SwitchProps) => {
  const { label, disabled, defaultChecked, onChange } = props;

  const [checked, setChecked] = useState<boolean>(defaultChecked);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    setChecked(checked);
  };

  // チェックが入っている場合のみ非活性にできる。
  const control = (
    <Checkbox
      checked={checked}
      onChange={handleOnChange}
      disabled={disabled && checked}
    />
  );
  return (
    <FormControlLabel
      control={control}
      labelPlacement="end"
      label={label ?? ''}
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

  const handleLengthChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleNumbersChanged = (checked: boolean) => {
    setOption({
      ...option,
      numbers: checked,
    });
  };

  const handleSymbolsChanged = (checked: boolean) => {
    setOption({
      ...option,
      symbols: checked,
    });
  };

  const handleLowercaseChanged = (checked: boolean) => {
    setOption({
      ...option,
      lowercase: checked,
    });
  };

  const handleUppercaseChanged = (checked: boolean) => {
    setOption({
      ...option,
      uppercase: checked,
    });
  };

  const handleExcludeSimilarCharactersChanged = (checked: boolean) => {
    setOption({
      ...option,
      excludeSimilarCharacters: checked,
    });
  };

  const handleStrictChanged = (checked: boolean) => {
    setOption({
      ...option,
      strict: checked,
    });
  };

  useEffect(() => {
    onOptionChanged(option);
  }, [option]);

  // 使う文字種別が1つのときはチェックを外せないようにする。
  const typeOfCharactors = (() => {
    const { numbers, symbols, lowercase, uppercase } = option;
    return [numbers, symbols, lowercase, uppercase].filter((d) => d).length;
  })();
  const hasOnlyOneCharactors = typeOfCharactors === 1;

  return (
    <>
      <OptionComponent title="Count" summary="Amout of password">
        <Input
          defaultValue={count}
          onChange={handleCountChanged}
          sx={{ px: 1 }}
        />
      </OptionComponent>
      <OptionComponent title="Length" summary="Length of password">
        <Input
          defaultValue={length}
          onChange={handleLengthChanged}
          sx={{ px: 1 }}
        />
      </OptionComponent>
      <OptionComponent title="Charactors" summary="Put charactors in password">
        <SwitchComponent
          label="Numbers"
          defaultChecked={numbers}
          disabled={hasOnlyOneCharactors}
          onChange={handleNumbersChanged}
        />
        <SwitchComponent
          label="Symbols"
          defaultChecked={symbols}
          disabled={hasOnlyOneCharactors}
          onChange={handleSymbolsChanged}
        />
        <SwitchComponent
          label="Lowercase"
          defaultChecked={lowercase}
          disabled={hasOnlyOneCharactors}
          onChange={handleLowercaseChanged}
        />
        <SwitchComponent
          label="Uppercase"
          defaultChecked={uppercase}
          disabled={hasOnlyOneCharactors}
          onChange={handleUppercaseChanged}
        />
      </OptionComponent>
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

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

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
        <CardContentNoPadding sx={{ py: 0, my: 0, flex: '1 0 auto' }}>
          <Options
            defaultValue={defaultValue}
            onOptionChanged={handleOptionChanged}
          />
        </CardContentNoPadding>
      </Card>
    </>
  );
};
