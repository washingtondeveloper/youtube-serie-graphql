const db = require("../../../db");

module.exports = {
  Query: {
    products: () => db.products,
    product: (_, { id }) => db.products.find((p) => p.id === id),
  },
};
