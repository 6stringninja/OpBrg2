import { IClientState } from './IClientState';
import { ClientStateSerializer } from './ClientStateSerializer';

export class ClientState implements IClientState {
  name: string = '';

  static serializer = new ClientStateSerializer();
  static async get() {
    if (!(await ClientState.serializer.dataExists())) {
      await ClientState.serializer.serialize(new ClientState());
    }
    const res = await ClientState.serializer.deserialize();
    return res.result ? res.result : new ClientState();
  }
}
