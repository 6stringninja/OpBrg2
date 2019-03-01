import { IServerConfig } from './IServerConfig';
import { SerializerJsonFileService } from '../Common/FileUtil';
import { ServerConfigSerializer } from './ServerConfigSerializer';
export class ServerConfig implements IServerConfig {
  serverPassword = '1234';
  port = 3001;
  clientLoggingEnabled = true;
  clientLoggingMaxRecords = 500;
  clientLoggingMessageWireTap: string[] = [];
  static serverConfigSerilizer = new ServerConfigSerializer();
  static async get() {
    if (!(await ServerConfig.serverConfigSerilizer.dataExists())) {
      await ServerConfig.serverConfigSerilizer.serialize(new ServerConfig());
    }
    const result = await (ServerConfig.serverConfigSerilizer.deserialize());
    return result.result ? result.result : new ServerConfig();
  }
}
