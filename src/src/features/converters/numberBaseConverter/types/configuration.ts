export type Radix = 'Binary' | 'Decimal' | 'Octal' | 'Hexadecimal';
export type BaseNumber = 2 | 8 | 10 | 16;

export type NumberBaseFormat = {
  radix: Radix;
  baseNumber: BaseNumber;
  groupSize: number;
  groupSeparator: string;
};

export const numberBaseFormats: NumberBaseFormat[] = [
  {
    radix: 'Binary',
    baseNumber: 2,
    groupSize: 4,
    groupSeparator: ' ',
  },

  {
    radix: 'Octal',
    baseNumber: 8,
    groupSize: 3,
    groupSeparator: ' ',
  },
  {
    radix: 'Decimal',
    baseNumber: 10,
    groupSize: 3,
    groupSeparator: ',',
  },
  {
    radix: 'Hexadecimal',
    baseNumber: 16,
    groupSize: 4,
    groupSeparator: ' ',
  },
];

export type Configurations = {
  isFormatted: boolean;
  inputType: Radix;
};
