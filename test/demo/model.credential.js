const DAO = require("../../")

class CredentialModel extends DAO {
    configure(options) {
        options = options || {};
        options.model = {
            name: "credential"
        };
        return super.configure(options);
    }
}

module.exports = CredentialModel;