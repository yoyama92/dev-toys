import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import StorageIcon from '@mui/icons-material/Storage';
import { Typography } from '@mui/material';

import { ToolProvider } from '@/types/toolProvider';
const element = <Typography>作成中</Typography>;

export const provider: ToolProvider = {
  menu: 'Formatters',
  title: '',
  Icon: FormatIndentIncreaseIcon,
  link: '/formatters',
  description: '',
  children: [
    {
      menu: 'JSON',
      title: 'JSON Formatter',
      Icon: DataObjectIcon,
      element: element,
      link: 'json',
      description: 'Indent or minify JSON data',
    },
    {
      menu: 'SQL',
      title: 'SQL Formatter',
      Icon: StorageIcon,
      element: element,
      link: 'sql',
      description: 'Indent SQL queries',
    },
    {
      menu: 'XML',
      title: 'XML Formatter',
      Icon: CodeIcon,
      element: element,
      link: 'xml',
      description: 'Indent or minify XML data',
    },
  ],
};
