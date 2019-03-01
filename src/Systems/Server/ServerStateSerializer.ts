import {
  SerializerJsonFileService,
  SerializerDir
} from '../Common/FileUtil';
import { ServerState } from './ServerState';
export class ServerStateSerializer extends SerializerJsonFileService<
  ServerState
> {
  constructor() {
    super('serverState.json', SerializerDir.Data);
  }
}
