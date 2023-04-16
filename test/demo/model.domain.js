const DAO = require("../../")

class DomainModel extends DAO {
    configure(options) {
        options = options || {};
        options.model = {
            name: "domain"
        };
        return super.configure(options);
    }
}

module.exports = DomainModel;