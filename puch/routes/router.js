const express  = require('express');
const router = express.Router();
const usuario = require("../models/Usuario")
const medidor = require("../models/Medidor")


router.get('/',(req, res) =>{
    res.send('Inicio')
})

router.get('/productos',async(req, res) =>{
    const datos = await usuario.find({})
    res.json(datos)
})
router.get('/medidor', async(req,res)=>{
    const datos = await medidor.find({})
    res.json(datos)
})

router.post('/productos',async (req, res) => {
    const datos  = new usuario(req.body);
    try {
        await datos.save();
        res.send(datos);
      } catch (error) {
        res.status(500).send(error);
      }
      

})  
router.post('/medidor', async(req,res)=>{
    const datos  = new medidor(req.body);
    try {
        await datos.save();
        res.send(datos);
      } catch (error) {
        res.status(500).send(error);
      }
      

})

router.put('/productos/:id', async (req, res) => {
    const nuevosdatos = req.body;

    try {
        console.log("respuesta", req.params.id,"body",nuevosdatos)
        // Utiliza findOne para obtener un usuario específico por su ID
        const usuarioInfo = await usuario.findById((req.params.id));
        console.log("este es el usuario",usuarioInfo)
        if (!usuarioInfo) {
            return res.status(404).json({
                mensaje: "No hay producto",
            });
        }

        // Actualiza el usuario con los nuevos datos y devuelve el documento actualizado
       usuarioInfo.nombre = nuevosdatos.nombre
        await usuarioInfo.save()
        res.json({
            mensaje: "Producto actualizado",
            usuario: usuarioInfo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor",
        });
    }
});
router.put('/medidor/:id', async(req,res)=>{
    const medidordatos= req.body;

    try {
        console.log("respuesta", req.params.id,"body",medidordatos)
        // Utiliza findOne para obtener un usuario específico por su ID
        const medidoInfo = await medidor.findById((req.params.id));
        console.log("este es son los datos del medidor",medidoInfo)
        if (!medidoInfo) {
            return res.status(404).json({
                mensaje: "No hay producto",
            });
        }

        // Actualiza el usuario con los nuevos datos y devuelve el documento actualizado
       medidoInfo.numeroMedidor = medidordatos.numeroMedidor
       medidoInfo.registroconsumo = medidordatos.registroconsumo
        await medidoInfo.save()
        res.json({
            mensaje: "Medidor actualizado",
            medidors: medidoInfo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor",
        });
    }
})

router.delete('/productos/:id',async (req, res) =>{
    try {
        // Encuentra el usuario por ID
        const eliminar = await usuario.findById(req.params.id);

        // Verifica si el usuario existe
        if (!eliminar) {
            return res.status(404).json({
                mensaje: "No se encontró el usuario"
            });
        }

        // Elimina el usuario
        await eliminar.deleteOne();

        // Envía la respuesta de éxito
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
});
router.delete('/medidor/:id', async(req,res)=>{
    try {
        // Encuentra el usuario por ID
        const eliminar = await medidor.findById(req.params.id);

        // Verifica si el usuario existe
        if (!eliminar) {
            return res.status(404).json({
                mensaje: "No se encontró el medidor"
            });
        }

        // Elimina el usuario
        await eliminar.deleteOne();

        // Envía la respuesta de éxito
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

router.get('/productos/:id',async(req, res) =>{
 try {
        const usuarioInfo = await usuario.findById((req.params.id));

        if (!usuarioInfo) {
            return res.status(404).json({
                mensaje: "No hay ese producto"
            });
        }

        res.json(usuarioInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
});   
router.get('/medidor/:id',async(req, res)=>{
    try {
        const medidoInfo = await medidor.findById((req.params.id));

        if (!medidoInfo) {
            return res.status(404).json({
                mensaje: "No hay ese producto"
            });
        }

        res.json(medidoInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})
module.exports = router