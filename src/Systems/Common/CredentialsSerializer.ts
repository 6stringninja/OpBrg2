import {
    SerializerJsonFileService,
    SerializerDir
} from './FileUtil';
import { Credential } from './Credential';
export class CredentialsSerializer extends SerializerJsonFileService<
    Credential[]
    > {
    constructor() {
        super('credentials.json', SerializerDir.Data);
    }
}