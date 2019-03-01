import { SerializerJsonFileService, SerializerDir } from '../Common/FileUtil';

import { ClientState } from './ClientState';
export class ClientStateSerializer extends SerializerJsonFileService<ClientState> {
    constructor() {
        super('clientState.json', SerializerDir.Data);
    }
}