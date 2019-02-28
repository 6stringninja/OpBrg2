import { ServerConfig } from './ServerConfig';
import { ServerState } from './ServerState';

export class Server {
  constructor(public config: ServerConfig, public state: ServerState) {}
  static async create() {
    return new Server(await ServerConfig.get(), await ServerState.get());
  }
}
