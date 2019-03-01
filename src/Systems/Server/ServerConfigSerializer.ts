import {
  SerializerJsonFileService,
  SerializerDir
} from '../Common/FileUtil';
import { ServerConfig } from './ServerConfig';
export class ServerConfigSerializer extends SerializerJsonFileService<
  ServerConfig
> {
  constructor() {
    super('serverConfig.json', SerializerDir.Config);
  }
}
