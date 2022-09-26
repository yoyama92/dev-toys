import yaml from 'js-yaml';

import { Indentation, Setting } from '../types/configuration';

const getIndentationValue = (indentation: Indentation) => {
  switch (indentation) {
    case 'TwoSpaces':
      return 2;
    case 'FourSpaces':
      return 4;
  }
};

const convertJsonToYaml = (value: string, indentSpace: number) => {
  if (isJson(value)) {
    const obj = JSON.parse(value);
    const yamlValue = yaml.dump(obj, {
      indent: indentSpace,
    });
    return yamlValue;
  }
  return '';
};

const convertYamlToJson = (value: string, indentSpace: number) => {
  if (isYaml(value)) {
    const obj = yaml.load(value);
    const jsonvalue = JSON.stringify(obj, null, indentSpace);
    return jsonvalue;
  }
  return '';
};

const isYaml = (value: string) => {
  try {
    yaml.load(value);
    return true;
  } catch {
    return false;
  }
};

const isJson = (value: string) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

export const convertValue = (value: string, setting: Setting) => {
  const { indentation, conversion } = setting;
  const indentSpace = getIndentationValue(indentation);
  switch (conversion) {
    case 'JsonToYaml':
      return convertJsonToYaml(value, indentSpace);
    case 'YamlToJson':
      return convertYamlToJson(value, indentSpace);
  }
};
