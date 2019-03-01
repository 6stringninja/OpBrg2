import { Credential } from './Credential';
import { TokenHelper } from './TokenHelper';
describe('Credential', () => {
  it('should generate cred', () => {
    const cred = new Credential('test', TokenHelper.generateValidToken());
    expect(
      cred.lastUpdated > 0 &&
        cred.lastUpdated === cred.created &&
        cred.name === 'test' &&
        TokenHelper.isValidToken(cred.token)
    ).toBeTruthy();
  });
  it('should update token', () => {
    let cred = new Credential('test', TokenHelper.generateValidToken());
    const hash = cred.token.hash;
    cred = Credential.updateToken(cred, TokenHelper.generateValidToken('test'));
    expect(hash !== cred.token.hash).toBeTruthy();
  });
});
