const usuario = require("../models/Usuario")


exports.getUsuarios= async (req,res) => {
    const datos = await usuario.find({})
    res.json(datos)

}
exports.postUsuarios= async(req,res)=> {
    const datos  = new usuario(req.body);
    try {
        await datos.save();
        res.send(datos);
      } catch (error) {
        res.status(500).send(error);
      }

}
exports.putUsuarios= async(req,res)=>{
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
       usuarioInfo.apellido = nuevosdatos.apellido
       usuarioInfo.ID = nuevosdatos.ID
       usuarioInfo.provincia = nuevosdatos.provincia
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
}
exports.deleteUsuarios= async(req,res)=>{
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
}
exports.getidUsuarios= async(req,res)=>{
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
}