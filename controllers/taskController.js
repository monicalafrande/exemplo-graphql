const Produto = require("../models/Produto");

const createProduto = async (nome, descricao, tamanho, valor, categoria) => {
  const newProduto = new Produto({
    nome,
    descricao,
    tamanho,
    valor,
    categoria,
  });

  await newProduto.save();

  return newProduto;
};

const getAllProduto = async () => {
  return await Produto.find();
};

const getProdutoById = async (id) => {
  try {
    const produto = await produto.findById(id);
    if (!produto) {
      throw new Error("Produto não encontrado");
    }
    return produto;
  } catch (error) {
    throw new Error("Erro ao recuperar produto");
  }
};

const deleteProduto = async (id) => {
  const produto = await Produto.findById(id);

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  await Produto.deleteOne({ _id: id });
  return true;
};

const editProduto = async (id, nome, descricao) => {
  let produto = await Produto.findByIdAndUpdate(
    id,
    { nome, descricao },
    { new: true }
  );

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  return produto;
};

module.exports = {
  createProduto,
  getAllProduto,
  getProdutoById,
  deleteProduto,
  editProduto,
};
