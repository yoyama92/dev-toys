import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import NumbersIcon from '@mui/icons-material/Numbers';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import { CronParser } from './cronParser';
import { JsonYaml } from './jsonYaml';
import { NumberBaseConverter } from './numberBaseConverter';

import { ToolProvider } from '@/types/toolProvider';

export const provider: ToolProvider = {
  menu: 'Converters',
  title: '',
  Icon: ChangeCircleIcon,
  link: '/converters',
  description: '',
  children: [
    {
      menu: 'JSON <> YAML',
      title: 'Json <> Yaml Converter',
      Icon: TextSnippetIcon,
      element: <JsonYaml />,
      link: 'json-yaml',
      description: 'Convert JSON data to YAML and vice versa',
    },
    {
      menu: 'Cron Parser',
      title: 'Cron Parser',
      Icon: ScheduleIcon,
      element: <CronParser />,
      link: 'cron-parser',
      description: 'Parse Cron expression to get scheduled dates',
    },
    {
      menu: 'Number Baser',
      title: 'Number Base Converter',
      Icon: NumbersIcon,
      element: <NumberBaseConverter />,
      link: 'number-baser',
      description: 'Convert numbers from one base to another',
    },
  ],
};
