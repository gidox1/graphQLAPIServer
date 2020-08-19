'use strict';

const Query = require('../query/query')

module.exports = {
    customer: Query.customer(),
    customers: Query.customers()
}