const db = require("../../../db");

module.exports = {
  Query: {
    users: () => db.users,
  },
};
