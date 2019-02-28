import {
  SerializerJsonFileService,
  SerializerDir
} from '../Application/FileUtil';
import { ServerState } from './ServerState';
export class ServerStateSerializer extends SerializerJsonFileService<
  ServerState
> {
  constructor() {
    super('serverState.json', SerializerDir.Data);
  }
}
