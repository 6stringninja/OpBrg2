import {
  SerializerJsonFileService,
  SerializerDir
} from '../Common/FileUtil';
import { ClientConfig } from './ClientConfig';
export class ClientConfigSerializer extends SerializerJsonFileService<
  ClientConfig
> {
  constructor() {
    super('clientConfig.json', SerializerDir.Config);
  }
}
