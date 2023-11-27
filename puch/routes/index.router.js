const express  = require('express');
const router = express.Router();
const personaController = require('../controller/personaController');
const medidorController = require('../controller/medidorController');
router.get("/",personaController.getUsuarios)
router.post("/",personaController.postUsuarios)
router.put("/actualiza/:id",personaController.putUsuarios)
router.delete("/eliminar/:id",personaController.deleteUsuarios)
router.get("/buscar/:id",personaController.getidUsuarios)

router.get("/",medidorController.getMedidor)
router.post("/",medidorController.postMedidor)
router.put("/actualiza/:id",medidorController.putMedidor)
router.delete("/eliminar/:id",medidorController.deleteMedidor)
router.get("/buscar/:id",medidorController.getidMedidor)
module.exports = router;