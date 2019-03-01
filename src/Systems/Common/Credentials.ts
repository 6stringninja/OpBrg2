import { Credential } from './Credential';
import { CredentialsSerializer } from './CredentialsSerializer';
import { isNullOrUndefined } from 'util';

export class Credentials {
  constructor(public credentails: Credential[] = []) {}

  static serializer = new CredentialsSerializer();
  static async get(creds: Credential[] | undefined = undefined) {
    if (!isNullOrUndefined(creds) && creds.length > 0)
      return new Credentials(creds);
    if (!(await Credentials.serializer.dataExists())) {
      const creds: Credential[] = [];
      await Credentials.serializer.serialize(creds);
    }
    const res = await Credentials.serializer.deserialize();
    return new Credentials(res.result ? res.result : []);
  }
  static async saveCredentials(cred: Credentials) {
    await Credentials.serializer.serialize(cred.credentails);
  }
  static async save(cred: Credential[]) {
    await Credentials.serializer.serialize(cred);
  }
}
