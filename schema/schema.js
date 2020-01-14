'use strict';

const Mutations = require('./mutations/mutation');
const Query = require('./query/query');
const { GraphQLObjectType, GraphQLSchema, } = require('graphql')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: Query.customer(),
        customers: Query.customers()
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCustomer: Mutations.addCustomer(),
        deleteCustomer: Mutations.deleteCustomer(),
        editCustomer: Mutations.editCustomer()
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})