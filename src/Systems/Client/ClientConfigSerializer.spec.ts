import fs from 'fs';
import { ClientConfigSerializer } from './ClientConfigSerializer';
import { ClientConfig } from './ClientConfig';
import { SerializerDir } from '../Application/FileUtil';
describe('ClientConfigSerializer', function() {
  const test = new ClientConfigSerializer();

  it('should return config', async function() {
    ClientConfig.serializer.dir = SerializerDir.ConfigTest;
    if (fs.existsSync(ClientConfig.serializer.filePath())) {
      fs.unlinkSync(ClientConfig.serializer.filePath());
    }
    const conf = await ClientConfig.get();

    expect(conf).toBeDefined();

    expect(conf.name).toBe('');
    ClientConfig.serializer.dir = SerializerDir.Config;
  });
});
