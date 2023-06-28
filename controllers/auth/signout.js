import User from '../../models/User.js';

export default async (req,res,next) => {
    try {
         await User.findOneAndUpdate(
            // objeto de busqueda
            // objetos a cambiar
            {email:req.user.email},  // user es una propiedad que inyecta la estrategia de passport si tiene exito
            {online:false},    
        )
        // por eso no hace falta la condicion si existe user (aunque no va ser necesaria)
        return res.status(200).json({
            success: true,
            responde:null,
            messages :['disconnected!']
            // {
            //     user:req.body.user,
            //     token:req.body.token
            // },
            // messges:['signed in!']
        })
    } catch (error) {
        return next(error);
    }

}