import { Utility } from './Utility';
describe('Utility', () => {
  it('getTimeStamp should return time stamp > now', done => {
    const now = new Date().getTime();
    setTimeout(() => {
      const timestamp = Utility.getTimeStamp();
      done();
      expect(timestamp).toBeGreaterThan(now);
    }, 50);
  });
  it('generateIdentifier should return id', done => {
    const id = Utility.generateIdentifier();
    done();
    expect(id.length).toBe(27);
  });
  it('generateMacAddress should return mac address ', done => {
    const id = Utility.generateMacAddress();

    done();
    expect(id.length).toBe(17);
  });
  it('validateMacAddress should be true', done => {
    const id = Utility.generateMacAddress();

    console.log(id);
    done();
    expect(Utility.validateMacAddress(id)).toBeTruthy();
  });
  it('validateMacAddress should be false', done => {
    const id = Utility.generateMacAddress();

    console.log(id);
    done();
    expect(Utility.validateMacAddress('id')).toBeFalsy();
  });
});
