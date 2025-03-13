const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Produto {
    id: ID!
    nome: String!
    descricao: String!
    valor: Float!
    categoria: String!
    tamanho: String!
  }
  type Query {
    produtos: [Produto]
    produto(id: ID!): Produto
  }
  type Mutation {
    createProduto(
      nome: String!
      descricao: String!
      valor: Float!
      categoria: String!
      tamanho: String!
    ): Produto
    editProduto(id: ID!, nome: String!, descricao: String!): Produto
    deleteProduto(id: ID!): Boolean
  }
`;

module.exports = { typeDefs };
