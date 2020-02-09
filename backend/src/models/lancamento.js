const mongoose = require('mongoose');

const lancamentoSchema = new mongoose.Schema({
    titulo: { type: String },
    valor: { type: Number },
    data: { type: Date },
    tipo: { type: String },
});

module.exports = mongoose.model('Lancamento', lancamentoSchema)
