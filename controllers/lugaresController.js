const Lugares = require("../models/Lugares");

exports.crearLugar = async (req, res) =>{
    try{
        let lugar;
        //Creamos nuestros lugar
        lugar = new Lugares(req.body);
        await lugar.save()
        res.send(lugar);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al colocar.')
    }
}
exports.obtenerLugares = async (req,res) =>{
    try{
        const lugares = await Lugares.find();
        res.json(lugares);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al colocar.')
    }
}
exports.actualizarLugares = async (req,res) =>{
    try{
        const {nombre,direccion,estado,tipo,referencias,telefono} = req.body;
        let lugarcito = await Lugares.findById(req.params.id);
        if(!lugarcito){
            res.status(404).json({msg:'No existe ese lugar'})
        }
        lugarcito.nombre = nombre;
        lugarcito.direccion = direccion;
        lugarcito.estado = estado;
        lugarcito.tipo = tipo;
        lugarcito.referencias = referencias;
        lugarcito.telefono=telefono;

        lugarcito = await Lugares.findOneAndUpdate({ _id: req.params.id}, lugarcito, { new: true} )
        res.json(lugarcito);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al colocar.')
    }
}
exports.eliminarLugar = async (req,res) =>{
    try{
        let lugarcito = await Lugares.findById(req.params.id);
        if(!lugarcito){
            res.status(404).json({msg:'No existe ese lugar'})
        }
        await Lugares.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Lugar eliminado con éxito' });
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al colocar.')
    }
}