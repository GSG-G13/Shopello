const connection = require('../../config/connection');

const getProductsQuery = () => connection.query('select * from products');

module.exports = getProductsQuery;
