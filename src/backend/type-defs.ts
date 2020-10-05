import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    books(offset: Int): [Book]!
  }

  type Book {
    title: String!
    author: String!
    price: Float!
    code: String!
  }
`;