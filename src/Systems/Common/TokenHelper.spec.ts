import { TokenHelper } from './TokenHelper';
import { Token } from './Token';
import { Utility } from './Utility';
describe('Token Helper', () => {
  it('isValidToken should return true', () => {
    const token = new Token('test', Utility.generateIdentifier());
    expect(TokenHelper.isValidToken(token)).toBeTruthy();
  });
  it('isValidToken should return false', () => {
    let token = new Token('', Utility.generateIdentifier());
    expect(TokenHelper.isValidToken(token)).toBeFalsy();
    token = new Token('test', Utility.generateIdentifier(), 0);
    expect(TokenHelper.isValidToken(token)).toBeFalsy();
    token = new Token('test', 'Utility.generateIdentifier()');
    expect(TokenHelper.isValidToken(token)).toBeFalsy();
  });
    it('validateToken should return true', () => {
        const token = new Token('test', Utility.generateIdentifier());
        const tokens = [token];

        expect(TokenHelper.validateToken(tokens, token)).toBeTruthy();
    });
    it('validateToken should return false', () => {
        const token = new Token('test', Utility.generateIdentifier());
        const tokens = [new Token('test', Utility.generateIdentifier())];

        expect(TokenHelper.validateToken(tokens, token)).toBeFalsy();
    });
    it('generateValidToken should generate valid token', () => {
        const token = TokenHelper.generateValidToken();

        expect(TokenHelper.isValidToken(token)).toBeTruthy();
    });
    it('generateValidToken should generate valid token', () => {
        const token = TokenHelper.generateValidToken('test');

        expect(TokenHelper.isValidToken(token)).toBeTruthy();
        expect(token.name).toBe('test');
    });
});
