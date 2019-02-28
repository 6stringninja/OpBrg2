import { ClientConfig } from './ClientConfig';
import { ClientState } from './ClientState';

export class Client {
    constructor(public config: ClientConfig, public state: ClientState) { }
    static async create() {
        return new Client(await ClientConfig.get(), await ClientState.get());
    }
}
