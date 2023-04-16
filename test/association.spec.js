
const { credentialModel, domainModel } = require('./demo/db.association');

describe('Association', () => {

    beforeAll(async () => {
        await Promise.all([
            domainModel.create({ id: 1, name: "test1", ica: 123 }),
            domainModel.create({ id: 2, name: "test2", ica: 321 }),

            credentialModel.create({ id: 1, name: "Nytst1", den: "test1", url_entry: "127.0.0.1:8080/test1" }),
            credentialModel.create({ id: 2, name: "Nytst2", den: "test2", url_entry: "127.0.0.1:8080/test2", domainId: 1 }),
            credentialModel.create({ id: 3, name: "Nytst3", den: "test3", url_entry: "127.0.0.1:8080/test3", domainId: 1 }),
            credentialModel.create({ id: 4, name: "Nytst4", den: "test4", url_entry: "127.0.0.1:8080/test4", domainId: 2 }),
        ]);
    });
    afterAll(async () => { });

    it("valid instance", (done) => {
        expect(credentialModel).toBeInstanceOf(Object);
        expect(domainModel).toBeInstanceOf(Object);
        done();
    });


    it("valid select", async (done) => {
        let res = await credentialModel.select({ where: 1 });
        expect(res).toBeInstanceOf(Object);
        expect(res.name).toBe("Nytst1");
        done();
    });
});