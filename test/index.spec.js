
const DAO = require('../');

describe('Load Ksdb Lib', () => {

    beforeAll(async () => { });
    afterAll(async () => { });

    it("valid instance", (done) => {
        expect(DAO).toBeInstanceOf(Function);
        done();
    });
});