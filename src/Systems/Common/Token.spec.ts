import { Utility } from './Utility';
import { Token } from './Token';

describe('Token', () => {
  it('should generate token', () => {
    const token = new Token('test', Utility.generateIdentifier());
    expect(token.hash.length).toBe(27);
    expect(token.timestamp).toBeGreaterThan(5000);
    expect(token.name).toBe('test');
  });
});
