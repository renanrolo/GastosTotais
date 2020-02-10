const mongoose = require('mongoose');

const lancamentoScheme = new mongoose.Schema({
    posicao: { type: Number },
    titulo: { type: String },
    valor: { type: Number },
    dataVencimento: { type: Date },
    dataPagamento: { type: Date }
})

const mesSheme = new mongoose.Schema({
    mesAno: { type: Date },
    lancamentos: [lancamentoScheme]
})

const configSchema = new mongoose.Schema({
    qtdDiasParaLembrete: { type: Number },
    mes: mesSheme
});

const gastosSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    config: configSchema,
    titulo: { type: String },
    valor: { type: Number },
    data: { type: Date },
    tipo: { type: String, enum: ['Entrada', 'Saida', 'Lembrete'], required: true },
});

module.exports = mongoose.model('gastos', gastosSchema)
