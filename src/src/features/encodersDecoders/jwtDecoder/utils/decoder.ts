import jwt_decode, { JwtHeader, JwtPayload } from 'jwt-decode';

export const decodedJwt = (token: string): JwtPayload | undefined => {
  try {
    const decoded = jwt_decode<JwtPayload>(token);
    return decoded;
  } catch {
    return undefined;
  }
};

export const decodeJwtHeader = (token: string): JwtHeader | undefined => {
  try {
    const decoded = jwt_decode<JwtHeader>(token, {
      header: true,
    });
    return decoded;
  } catch {
    return undefined;
  }
};
