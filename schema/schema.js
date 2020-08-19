'use strict';

const Mutations = require('./mutations/mutation');
const Query = require('./query/query');
const qf = require('./query_fields/query_fields')
const mf = require('../schema/mutation_fields/mutation_fields');
const { GraphQLObjectType, GraphQLSchema, } = require('graphql')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: qf
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: mf
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})