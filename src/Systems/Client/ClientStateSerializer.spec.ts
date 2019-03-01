import fs from 'fs';
import { ClientStateSerializer } from './ClientStateSerializer';
import { ClientState } from './ClientState';
import { SerializerDir } from '../Common/FileUtil';
describe('ClientStateSerializer', function() {
  const test = new ClientStateSerializer();

  it('should return config', async function() {
    ClientState.serializer.dir = SerializerDir.ConfigTest;
    if (fs.existsSync(ClientState.serializer.filePath())) {
      fs.unlinkSync(ClientState.serializer.filePath());
    }
    const conf = await ClientState.get();

    expect(conf).toBeDefined();

    expect(conf.name).toBe('');
    ClientState.serializer.dir = SerializerDir.Config;
  });
});
