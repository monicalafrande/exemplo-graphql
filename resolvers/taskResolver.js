const taskController = require('../controllers/taskController');

const resolvers = {
  Query: {
    produtos: async () => await taskController.getAllProduto(),
    produto: async (_, { id }) => await taskController.getTaskById(id),
  },
  Mutation: {
    createProduto: async (_, { nome, descricao, tamanho, valor, categoria }) => {
      return await taskController.createProduto(nome, descricao, tamanho, valor, categoria); 
    },
    editProduto: async (_, { id, nome, descricao }) => {
      return await taskController.editProduto(id, nome, descricao);
    },
    deleteProduto: async (_, { id }) => {
      return await taskController.deleteProduto(id);
    },
    
  },
};

module.exports = resolvers;