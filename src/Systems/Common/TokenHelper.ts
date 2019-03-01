import { Token } from './Token';
import { isNullOrUndefined } from 'util';
import { Utility } from './Utility';

export class TokenHelper {
  static isValidToken(token: Token | undefined) {
    return (
      !isNullOrUndefined(token) &&
      token.name &&
      token.hash.length === 27 &&
      token.timestamp > 1
    );
  }
  static validateToken(validtokens: Token[], token: Token | undefined) {
    return (
      !isNullOrUndefined(token) &&
      TokenHelper.isValidToken(token) &&
      validtokens.find(
        f =>
          f.hash === token.hash &&
          f.name === token.name &&
          f.timestamp === token.timestamp
      )
    );
  }
  static generateValidToken(name = ''): Token {
    if (!name) name = 'name';
    return new Token(name, Utility.generateIdentifier());
  }
}
