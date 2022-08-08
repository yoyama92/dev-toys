import { format as formatDate } from 'date-fns';

export const isVailDateFormat = (format: string) => {
  try {
    formatDate(new Date(), format);
    return true;
  } catch {
    return false;
  }
};
