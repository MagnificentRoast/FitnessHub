const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    groupSpeciality: String
  
    
  }
  type Query {
    users: [User]
    user: User
  } 
  `;

  module.exports = typeDefs;
