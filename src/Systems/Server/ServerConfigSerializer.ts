import {
  SerializerJsonFileService,
  SerializerDir
} from '../Application/FileUtil';
import { ServerConfig } from './ServerConfig';
export class ServerConfigSerializer extends SerializerJsonFileService<
  ServerConfig
> {
  constructor() {
    super('serverConfig.json', SerializerDir.Config);
  }
}
