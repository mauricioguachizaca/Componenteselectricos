const Medidor =  require('../models/Medidor')

exports.getMedidor= async (req,res) => {
    const datos = await Medidor.find({})
    res.json(datos)

}
exports.postMedidor= async(req,res)=> {
    const datos  = new Medidor(req.body);
    try {
        await datos.save();
        res.send(datos);
      } catch (error) {
        res.status(500).send(error);
      }
}
exports.putMedidor= async(req,res)=>{
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
}
exports.deleteMedidor=async(req,res)=>{
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
}
exports.getidMedidor=async(req,res)=>{
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
}