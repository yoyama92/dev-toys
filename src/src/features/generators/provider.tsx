import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';
import KeyIcon from '@mui/icons-material/Key';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import TagIcon from '@mui/icons-material/Tag';
import { Typography } from '@mui/material';

import { Password } from './password';

import { ToolProvider } from '@/types/toolProvider';
const element = <Typography>作成中</Typography>;

export const provider: ToolProvider = {
  menu: 'Generators',
  title: '',
  Icon: CreateIcon,
  link: '/generators',
  description: '',
  children: [
    {
      menu: 'Hash',
      title: 'Hash Generator',
      Icon: TagIcon,
      element: element,
      link: 'hash',
      description: 'Calculate MD5, SHA1, SHA256 and SHA512 hash from text data',
    },
    {
      menu: 'UUID',
      title: 'UUID Generator',
      Icon: PermDeviceInformationIcon,
      element: element,
      link: 'uuid',
      description: 'Generate UUIDs version 1 and 4',
    },
    {
      menu: 'Checksum',
      title: 'Checksum Generator',
      Icon: CheckIcon,
      element: element,
      link: 'checksum',
      description: 'Generate a hash with Checksum based on a file',
    },
    {
      menu: 'Password',
      title: 'Password Generator',
      Icon: KeyIcon,
      element: <Password />,
      link: 'password',
      description: 'Generate a lot of passwords',
    },
  ],
};
