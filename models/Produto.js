const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  categoria: {type: String, required: true },
  tamanho: {
    type: String,
    required: true,
   
  },
});

module.exports = mongoose.model("Task", taskSchema);
