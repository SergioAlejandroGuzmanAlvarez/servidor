const Experiencia = require("../models/Experiencias.js");
exports.crearExperiencia = async (req, res) =>{
    try{
        let exper;
        //Creamos los usuarios
        exper = new Experiencia(req.body);
        await exper.save()
        res.send(exper);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al colocar la experiencia.')
    }
}
exports.obtenerExperiencia = async (req,res) =>{
    try{
        const experiencia = await Experiencia.find();
        res.json(experiencia);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al obtener.')
    }
}