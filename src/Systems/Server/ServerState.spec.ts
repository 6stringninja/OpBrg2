import fs from 'fs';
import { ServerState } from './ServerState';
import { SerializerDir } from '../Application/FileUtil';
describe('ServerStateSerializer', function() {
  it('should return config', async function() {
    ServerState.serializer.dir = SerializerDir.ConfigTest;
    if (fs.existsSync(ServerState.serializer.filePath())) {
      fs.unlinkSync(ServerState.serializer.filePath());
    }
    const conf = await ServerState.get();

    expect(conf).toBeDefined();

    expect(conf.result.state).toBe('');
    ServerState.serializer.dir = SerializerDir.Config;
  });
});
