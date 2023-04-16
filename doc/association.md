```Js
const DAO = require("ksdb");
```

### STEP 1: Model declaration 
```Js
class CredentialModel extends DAO {
    configure(options) {
        options = options || {};
        options.model = {
            name: "credential"
        };
        return super.configure(options);
    }
}

class DomainModel extends DAO {
    configure(options) {
        options = options || {};
        options.model = {
            name: "domain"
        };
        return super.configure(options);
    }
}
```

### STEP 2: Model intanciation   
```Js
const connection = {
    path: __dirname + "/../../db",
    logger: console,
    dialect: "file"
};
const credentialModel = new CredentialModel({ driver: connection });
const domainModel = new DomainModel({ driver: connection })
```

### STEP 3: Model associations
```Js
credentialModel.has({ model: domainModel, foreignKey: "domainId", type: "OneToOne" });
domainModel.has({ model: credentialModel, foreignKey: "domainId", type: "OneToMany" });

module.exports = {
    credentialModel,
    domainModel
};
```

### STEP 4: Model population
```Js
const row = domainModel.create({ id: 12345, name: "test1", ica: 123 });
const row = domainModel.create({ id: 12346, name: "test2", ica: 321 });

const row = credentialModel.create({ name: "Nytst1", den: "test1", url_entry: "127.0.0.1:8080/test1" });
const row = credentialModel.create({ name: "Nytst2", den: "test2", url_entry: "127.0.0.1:8080/test2", domainId: 12345 });
const row = credentialModel.create({ name: "Nytst3", den: "test3", url_entry: "127.0.0.1:8080/test3", domainId: 12345 });
const row = credentialModel.create({ name: "Nytst4", den: "test4", url_entry: "127.0.0.1:8080/test4", domainId: 12346 });
```

### STEP 5: Model query
```Js
const list = await credentialService.select({
    attributes: ["name", "url_entry"] 
    include: [
        {
            model: "domain", 
            attributes: ["name", "id"] 
        }
    ]
});
```