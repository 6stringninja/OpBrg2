import { Token } from './Token';
import { Utility } from './Utility';
import { TokenHelper } from './TokenHelper';

interface MapDictionary<T> {
  [K: string]: T;
}

const dict: MapDictionary<number> = {};
dict['one'] = 1;
export class Credential {
  lastUpdated: number;
  constructor(
    public name = '',
    public token: Token,
    public created = Utility.getTimeStamp()
  ) {
    this.lastUpdated = created;
  }
  static updateToken(cred: Credential, token: Token): Credential {
    if (TokenHelper.isValidToken(token) && cred.name === token.name) cred.token = token;
    return cred;
  }
}
