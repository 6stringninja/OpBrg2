export class Utility {
  static getTimeStamp = () => new Date().getTime();
  private static generate9CharRandomString = () =>
    Math.random()
      .toString(36)
      .substr(2, 9);

  static generateIdentifier = (sizeX2 = 3) => {
    let id = '';
    for (let index = 0; index < sizeX2; index++) {
      id += Utility.generate9CharRandomString();
    }
    return id;
  };
  static generateMacAddress() {
    const hexDigits = '0123456789ABCDEF';
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 5) macAddress += ':';
    }
    return macAddress;
  }
  static validateMacAddress(address: string) {

      const regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;

      return regex.test(address);
  }
}
