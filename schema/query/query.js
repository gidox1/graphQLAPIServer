'use strict';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

const CustomerType = require('../types/types').CustomerType
const axios = require('axios');
const logger = require('turbo-logger').createStream({});


module.exports = {
    customer: function () {
        return {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/customers/'+ args.id)
                    .then(res => res.data)
                    .catch(err => logger.error(err));
            }
        }
    },

    customers: function() {
        return {
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/customers/')
                    .then(res => res.data)
                    .catch(err => logger.error(err));            
                }
        }
    }
}