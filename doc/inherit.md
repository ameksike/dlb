```Js
const DAO = require("ksdb");
```

```Js
const connection = {
    path: __dirname + "/../../db",
    logger: console,
    dialect: "file"
};

class DomainModel extends DAO {
    configure(options) {
        options = options || {};
        options.model = {
            name: "domain",
            key: "idp_issuer"
        };
        return super.configure(options);
    }
}
```

```Js
const domainModel = new DomainModel({ driver: connection });
const row = domainModel.create({
    id: 12345
    den: "test",
    ica: 123
});

console.log(
    row.den === "test",
    row.ica === 123,
)
```

```Js
const row = await domainModel.select({ id: "12345" });

console.log(
    row.den === "test",
    row.ica === 123,
)
```