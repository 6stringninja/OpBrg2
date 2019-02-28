import {
  SerializerJsonFileService,
  SerializerDir
} from '../Application/FileUtil';
import { ClientConfig } from './ClientConfig';
export class ClientConfigSerializer extends SerializerJsonFileService<
  ClientConfig
> {
  constructor() {
    super('clientConfig.json', SerializerDir.Config);
  }
}
