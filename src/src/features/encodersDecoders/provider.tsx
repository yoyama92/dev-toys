import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import CodeIcon from '@mui/icons-material/Code';
import Filter1Icon from '@mui/icons-material/Filter1';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';

import { JwtDecoder } from './jwtDecoder';

import { ToolProvider } from '@/types/toolProvider';

const element = <Typography>作成中</Typography>;

export const provider: ToolProvider = {
  menu: 'Encoders / Decoders',
  title: '',
  Icon: ClosedCaptionOffIcon,
  link: '/endecoders',
  description: '',
  children: [
    {
      menu: 'HTML',
      title: 'HTML Encoder / Decoder',
      Icon: CodeIcon,
      element: element,
      link: 'html',
      description:
        'Encode or decode all the applicable characters to their corresponding HTML entities',
    },
    {
      menu: 'URL',
      title: 'URL Encoder / Decoder',
      Icon: LinkIcon,
      element: element,
      link: 'url',
      description:
        'Encode or decode all the applicable characters to their corresponding URL entities',
    },
    {
      menu: 'Base 64',
      title: 'Base64 Text Encoder / Decoder',
      Icon: Filter1Icon,
      element: element,
      link: 'base64',
      description: 'Encode and decode Base64 text data',
    },
    {
      menu: 'JWT Decoder',
      title: 'JWT Decoder',
      Icon: SettingsIcon,
      element: <JwtDecoder />,
      link: 'jwt-decoder',
      description: 'Decode a JWT header, payload and signature',
    },
  ],
};
