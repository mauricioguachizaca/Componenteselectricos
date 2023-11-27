const mongoose = require('mongoose');

const Medidor = new mongoose.Schema({
    
    numeroMedidor: {
        type: String,
        require: true      
    },
    registroconsumo: {
        type: String,
        require: true
    }

});

const MedidorDB = mongoose.model('Medidor', Medidor);

module.exports = MedidorDB;