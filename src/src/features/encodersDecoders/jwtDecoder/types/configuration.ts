export type Setting = {
  conversion: Conversion;
  indentation: Indentation;
};

export type Conversion = 'JsonToYaml' | 'YamlToJson';
export type Indentation = 'TwoSpaces' | 'FourSpaces';
