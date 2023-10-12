const Usuarios = require("../models/Usuarios.js");
exports.crearUsuario = async (req, res) =>{
    try{
        let user;
        //Creamos los usuarios
        user = new Usuarios(req.body);
        await user.save()
        res.send(user);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al colocar un nuevo usuario.')
    }
}
exports.obtenerUsuario = async (req,res) =>{
    try{
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al obtener.')
    }
}
exports.prueba = async(req,res)=>{
    try{
        const {nombre,contraseña} = req.body;
        const user = await Usuarios.findOne({nombre})
        if(!user) return res.status(401).send("No existe ese nombre");
        if(!user.contraseña !== contraseña) return res.status(401).send("Contraseña incorrecta");
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un errror')
    }
}
exports.actualizarUsuario = async (req,res) =>{
    try{
        const {nombre,contraseña,tipoUsuario,pais,email,acercade} = req.body;
        let users = await Usuarios.findById(req.params.id);
        if(!users){
            res.status(404).json({msg:'No existe ese usuario'})
        }
        users.nombre=nombre;
        users.contraseña=contraseña;
        users.tipoUsuario=tipoUsuario;
        users.pais=pais;
        users.email=email;
        users.acercade=acercade;
        users = await Usuarios.findOneAndUpdate({ _id: req.params.id}, users, { new: true} )
        res.json(users);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al actualizar.')
    }
}
exports.eliminarUsuario = async (req,res) =>{
    try{
        let users = await Usuarios.findById(req.params.id);
        if(!users){
            res.status(404).json({msg:'No existe ese usuario'})
        }
        await Usuarios.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con éxito' });
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al borrar el usuario seleccionado.')
    }
}