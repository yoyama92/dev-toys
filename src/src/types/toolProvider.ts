import { SxProps, Theme } from '@mui/material';

type IconProps = {
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  sx?: SxProps<Theme>;
};

export type ToolProvider = {
  menu: string;
  Icon: (props: IconProps) => JSX.Element;
  link: string;
  description: string;
  element?: JSX.Element;
  children?: ToolProvider[];
};
