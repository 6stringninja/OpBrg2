import { IClientConfig } from './IClientConfig';
import { ClientConfigSerializer } from './ClientConfigSerializer';

export class ClientConfig implements IClientConfig {
  serverPassword = '1234';
  clientPassword = '1234';
  name: string = '';
  server: string = 'localhost';
  port: number = 3001;
  static serializer = new ClientConfigSerializer();
  static async get() {
    if (!(await ClientConfig.serializer.dataExists())) {
      await ClientConfig.serializer.serialize(new ClientConfig());
    }
    return await ClientConfig.serializer.deserialize();
  }
}
