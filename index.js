const express = require("express");
const db = require("./db/db.js");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schemas/produtoSchema.js');
const resolvers = require('./resolvers/taskResolver.js');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();

  server.applyMiddleware({ app });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
};

startServer();