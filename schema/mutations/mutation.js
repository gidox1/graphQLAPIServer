'use strict';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

const CustomerType = require('../types/types').CustomerType
const axios = require('axios');
const logger = require('turbo-logger').createStream({});


module.exports = {
    addCustomer: function () {
        return {
            type: CustomerType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parentValue, args) {
                return axios.post('http://localhost:3000/customers/', {
                    name: args.name,
                    email: args.email,
                    age: args.age
                })
                .then(res => res.data)
                .catch(err => logger.error(err))
            }
        }
    },

    deleteCustomer: function () {
        return {
            type: CustomerType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parentValue, args) {
                return axios.delete('http://localhost:3000/customers/'+args.id)
                .then(res => res.data)
                .catch(err => logger.error(err))
            }
        }
    },

    editCustomer: function () {
        return {
            type: CustomerType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: GraphQLString},
                email: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return axios.patch('http://localhost:3000/customers/'+args.id, args)
                .then(res => res.data)
                .catch(err => logger.error(err))
            }
        }
    }
}