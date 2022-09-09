import DifferenceIcon from '@mui/icons-material/Difference';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TitleIcon from '@mui/icons-material/Title';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Typography } from '@mui/material';

import { RegexTester } from './regexTester';

import { ToolProvider } from '@/types/toolProvider';
const element = <Typography>作成中</Typography>;

export const provider: ToolProvider = {
  menu: 'Text',
  title: '',
  Icon: TextFieldsIcon,
  link: '/text',
  description: '',
  children: [
    {
      menu: 'Inspector & Case Converter',
      title: 'Text Case Converter and Inspector',
      Icon: TitleIcon,
      element: element,
      link: 'string-utilities',
      description: 'Analyze text and convert it to a different case',
    },
    {
      menu: 'Regex Tester',
      title: 'Regex Tester',
      Icon: VerifiedIcon,
      element: <RegexTester />,
      link: 'regex',
      description: 'Validate and test regular expressions',
    },
    {
      menu: 'Text Diff',
      title: 'Text Comparer',
      Icon: DifferenceIcon,
      element: element,
      link: 'text-diff',
      description: 'Compare two texts',
    },
    {
      menu: 'Markdown Preview',
      title: 'Markdown Preview',
      Icon: ManageSearchIcon,
      element: element,
      link: 'markdown-preview',
      description: 'Preview a Markdown document with a GitHub-like render',
    },
  ],
};
