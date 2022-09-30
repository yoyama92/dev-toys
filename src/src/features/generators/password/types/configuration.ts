export type Configurations = {
  count: number;
  length: number;
  numbers: boolean;
  symbols: boolean;
  lowercase: boolean;
  uppercase: boolean;
  excludeSimilarCharacters: boolean;
  exclude: string;
  strict: boolean;
};

export const equalsConfigurations = (a: Configurations, b: Configurations) => {
  return (
    a.count === b.count &&
    a.length === b.length &&
    a.numbers === b.numbers &&
    a.symbols === b.symbols &&
    a.lowercase === b.lowercase &&
    a.uppercase === b.uppercase &&
    a.excludeSimilarCharacters === b.excludeSimilarCharacters &&
    a.exclude === b.exclude &&
    a.strict === b.strict
  );
};
