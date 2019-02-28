import fs from 'fs';
import { ServerConfigSerializer } from './ServerConfigSerializer';
import { ServerConfig } from './ServerConfig';
import { SerializerDir } from '../Application/FileUtil';
describe('ServerConfigSerializer', function() {
  const test = new ServerConfigSerializer();
  beforeEach(function() {
    test.dir = SerializerDir.ConfigTest;
     if (fs.existsSync(test.filePath())) fs.unlinkSync(test.filePath());
  });
  it('should create file', async function() {
    await test.serialize(new ServerConfig());
    console.log(test.filePath());
    expect(fs.existsSync(test.filePath())).toBeTruthy();
  });
  it('should deserialize file', async function() {
    const testData = new ServerConfig();
    testData.clientLoggingEnabled = true;
    testData.clientLoggingMessageWireTap = ['1', '2', '3'];
    await test.serialize(testData);
    const data = await test.deserialize();

    expect(data.result.clientLoggingEnabled === true).toBeTruthy();
    expect(data.result.clientLoggingMessageWireTap.length).toBe(3);
  });
  it('should return config', async function() {
    ServerConfig.serverConfigSerilizer.dir = SerializerDir.ConfigTest;
    if (fs.existsSync(ServerConfig.serverConfigSerilizer.filePath())) {
      fs.unlinkSync(ServerConfig.serverConfigSerilizer.filePath());
    }
    const conf = await ServerConfig.get();

    expect(conf).toBeDefined();

    expect(conf.clientLoggingMessageWireTap.length).toBe(0);
    ServerConfig.serverConfigSerilizer.dir = SerializerDir.Config;
  });
});
