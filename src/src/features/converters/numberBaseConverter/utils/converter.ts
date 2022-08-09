import {
  NumberBaseFormat,
  numberBaseFormats,
  Radix,
} from '../types/configuration';

const radixMap = new Map<Radix, NumberBaseFormat>(
  numberBaseFormats.map((v) => {
    return [v.radix, v];
  }),
);

export const convertValue = (
  value: number,
  outputType: Radix,
  isFormat: boolean,
): string => {
  const numberBaseFormat = radixMap.get(outputType);
  if (!numberBaseFormat) {
    return '';
  }
  const convertedValue = value.toString(numberBaseFormat?.baseNumber) ?? '';
  if (!isFormat) {
    return convertedValue;
  }
  const { groupSize, groupSeparator } = numberBaseFormat;
  const reversed = [...convertedValue.split('')].reverse();
  const mapped = reversed.map((value, index) => {
    // 末尾（反転しているので先頭）には区切り文字をつけない。
    if (index != 0 && index % groupSize === 0) {
      // 配列の状態で反転するので、「値＋区切り文字」順番で結合する。
      return value + groupSeparator;
    }
    return value;
  });
  const splittedValue = [...mapped].reverse().join('');
  return splittedValue ?? '';
};

export const parseValue = (value: string, inputType: Radix) => {
  const numberBaseFormat = radixMap.get(inputType);
  const baseNumber = numberBaseFormat?.baseNumber;
  if (isNumber(value, baseNumber)) {
    return parseInt(value, baseNumber);
  }
  return undefined;
};

const isNumber = (value: string, radix?: number) => {
  return !Number.isNaN(parseInt(value, radix));
};
