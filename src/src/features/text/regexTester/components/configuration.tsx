import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from '@mui/material';

import { Configurations } from '../types/configuration';
type ConfigurationProps = {
  defaultValue: Configurations;
  onOptionChanged: (value: Configurations) => void;
};

type OptionProps = {
  defaultValue: Configurations;
  onOptionChanged: (value: Configurations) => void;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// TODO 実装したら↓は削除する。
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Options = ({ defaultValue, onOptionChanged }: OptionProps) => {
  return (
    <CardContent>
      <Typography>設定</Typography>
    </CardContent>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandMore = styled(({ expand, ...props }: ExpandMoreProps) => {
  return <IconButton {...props} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Configuration = ({
  defaultValue,
  onOptionChanged,
}: ConfigurationProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOptionChanged = (value: Configurations) => {
    onOptionChanged(value);
  };

  return (
    <>
      <Typography variant="subtitle1">Configuration</Typography>
      <Card sx={{ py: 1, mb: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CardContent
            sx={{
              py: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SettingsIcon />
          </CardContent>
          <CardContent sx={{ py: 0, my: 0, flex: '1 0 auto' }}>
            <Typography variant="subtitle1">Options</Typography>
          </CardContent>
          <CardActions sx={{ m: 0, mr: 2, p: 0 }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Options
            defaultValue={defaultValue}
            onOptionChanged={handleOptionChanged}
          />
        </Collapse>
      </Card>
    </>
  );
};
