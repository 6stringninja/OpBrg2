import { Server } from './Server';
describe('Server', function () {

    it('should define config and state', async function () {
        const server = await Server.create();
        expect(server.config).toBeDefined();
        expect(server.state).toBeDefined();
    });
});