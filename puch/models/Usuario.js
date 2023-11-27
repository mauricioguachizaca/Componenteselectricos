const mongoose = require('mongoose'); 

const Usuario = new mongoose.Schema({

    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true

    },
    ID: {
        type: String,
        require: true
    },
    provincia: {
        type: String,
        require: true
    }
});

const UsuarioDB = mongoose.model('Usuario', Usuario);

module.exports = UsuarioDB;