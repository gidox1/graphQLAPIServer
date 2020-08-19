'use strict';

const Mutations = require('../mutations/mutation');

module.exports = {
    addCustomer: Mutations.addCustomer(),
    deleteCustomer: Mutations.deleteCustomer(),
    editCustomer: Mutations.editCustomer()
}