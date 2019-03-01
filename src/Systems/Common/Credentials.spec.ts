import { Credentials } from './Credentials';
import { Credential } from './Credential';
import { TokenHelper } from './TokenHelper';
import { SerializerDir } from './FileUtil';
describe('Credentials', () => {
  it('create credentials', async () => {
    const cred = await Credentials.get();
    expect(cred).toBeDefined();
  });
  it('create credentials with data', async () => {
    const cred = await Credentials.get([
      new Credential('test', TokenHelper.generateValidToken())
    ]);
    expect(cred.credentails.length).toBe(1);
  });
  it('save credentials', async () => {
    const curdir = Credentials.serializer.dir;
    Credentials.serializer.dir = SerializerDir.ConfigTest;
    const cred = await Credentials.get();
    cred.credentails.push(
      new Credential('test2', TokenHelper.generateValidToken())
    );

    await Credentials.saveCredentials(cred);
    const cred2 = await Credentials.get();
    expect(cred2.credentails.length).toBe(2);
    cred2.credentails.push(
      new Credential('test3', TokenHelper.generateValidToken())
    );
    await Credentials.save(cred2.credentails);
    const cred3 = await Credentials.get();
    expect(cred2.credentails.length).toBe(3);
    Credentials.serializer.dir = curdir;
  });
});
