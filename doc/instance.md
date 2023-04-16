```Js
const DAO = require("ksdb");
```

```Js
const connection = {
    path: __dirname + "/../../db",
    logger: console,
    dialect: "file"
};

const domainModel = new DAO({
    model: {
        name: "domain",
        key: "idp_issuer"
    },
    driver: connection
});
```

```Js
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