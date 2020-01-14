'use strict';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql')

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

module.exports = {
    CustomerType
}