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
    const res = await ServerState.serializer.deserialize();
    return res.result ? res.result : new ServerState();
  }
}
