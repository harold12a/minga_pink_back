import bcryptjs from 'bcryptjs';
export default (req,res,next)=>{ 
    req.body.password = bcryptjs.hashSync(req.body.password, 10);                 // nivel de seguridad confiable 

    
    return next()

}