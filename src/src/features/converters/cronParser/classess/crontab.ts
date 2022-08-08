import cronPaser, { CronExpression } from 'cron-parser';
import { format as formatDate } from 'date-fns';

import { isVailDateFormat } from '@/utils/date';

const isValid = (value: string) => {
  try {
    cronPaser.parseExpression(cronPaser.parseExpression(value).stringify());
    return true;
  } catch (err) {
    return false;
  }
};

export class Crontab {
  #interval: CronExpression | undefined;
  constructor(value: string, includeSeconds: boolean) {
    if (isValid(value))
      this.#interval = cronPaser.parseExpression(
        cronPaser.parseExpression(value).stringify(includeSeconds),
      );
  }

  getNext(format: string): string {
    if (isVailDateFormat(format)) {
      const date = this.#interval?.next().toDate();
      if (date) {
        return formatDate(date, format);
      }
    }
    return '';
  }
}
