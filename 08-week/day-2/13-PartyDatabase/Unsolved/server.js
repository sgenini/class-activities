var orm = require("./config/orm.js");

// orm.selectColFrom("client_name", "clients");

// orm.selectColFrom("party_name", "parties");

// orm.selectAllFromWhere("parties", "party_type", "grown-up");

orm.selectAllForEach("client_name", "clients", "parties", "parties", "client_id", "client_name");