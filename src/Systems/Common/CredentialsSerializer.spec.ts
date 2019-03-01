import fs from 'fs';
import { CredentialsSerializer } from './CredentialsSerializer';
import { Credential } from './Credential';
import { SerializerDir } from '../Common/FileUtil';
import { TokenHelper } from './TokenHelper';
describe('CredentialsSerializer', function () {
    const test = new CredentialsSerializer();

    it('should return config', async function () {
        const curdir = test.dir;
        test.dir = SerializerDir.ConfigTest;
        if (fs.existsSync(test.filePath())) {
            fs.unlinkSync(test.filePath());
        }
        const conf = await test.serialize([new Credential('test', TokenHelper.generateValidToken())]);
        const res = await test.deserialize();
        test.dir = curdir;
        expect(res.result.length).toBe(1);
    });
});
