import { ServerStateSerializer } from './ServerStateSerializer';

export interface IServerState {
  state: string;
}
export class ServerState implements IServerState {
  state: string = '';
  static serializer = new ServerStateSerializer();
  static async get() {
    if (!(await ServerState.serializer.dataExists())) {
      await ServerState.serializer.serialize(new ServerState());
    }
    return await ServerState.serializer.deserialize();
  }
}
