import { Client } from './Client';
describe('Client', function () {


    it('should define config and state', async function () {
        const client = await Client.create();
        expect(client.config).toBeDefined();
        expect(client.state).toBeDefined();
    });
});
