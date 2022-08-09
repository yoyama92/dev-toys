import { Radix } from '../types/configuration';
import { convertValue } from '../utils/converter';

export class ConvertedNumber {
  #value?: number;
  constructor(value?: number) {
    this.#value = value;
  }

  getHexadecimal(isFormatted: boolean) {
    return this.#convertValue('Hexadecimal', isFormatted);
  }

  getDecimal(isFormatted: boolean) {
    return this.#convertValue('Decimal', isFormatted);
  }

  getOctal(isFormatted: boolean) {
    return this.#convertValue('Octal', isFormatted);
  }

  getBinary(isFormatted: boolean) {
    return this.#convertValue('Binary', isFormatted);
  }

  #convertValue(outputType: Radix, isFormatted: boolean) {
    if (this.#value != undefined) {
      return convertValue(this.#value, outputType, isFormatted);
    }
    return '';
  }
}
