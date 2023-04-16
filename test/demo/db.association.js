// imports models 
const CredentialModel = require("./model.credential");
const DomainModel = require("./model.domain");

// define connetion options 
const connection = {
    path: __dirname + "/db",
    logger: console,
    dialect: "file"
};
// instantiate the models
const credentialModel = new CredentialModel({ driver: connection });
const domainModel = new DomainModel({ driver: connection });

// define associations
credentialModel.has({ model: domainModel, foreignKey: "domainId", type: "OneToOne" });
domainModel.has({ model: credentialModel, foreignKey: "domainId", type: "OneToMany" });

// export the models
module.exports = {
    credentialModel,
    domainModel
};