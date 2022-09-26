export type CronMode = 'SecondsExcludedMode' | 'SecondsIncludedMode';

export type GeneratedScheduleCount = 5 | 10 | 25 | 50 | 100;

export type Configurations = {
  cronMode: CronMode;
  generatedScheduleCount: GeneratedScheduleCount;
  outputFormat: string;
};
