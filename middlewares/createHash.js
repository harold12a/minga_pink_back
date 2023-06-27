import bcryptjs from 'bcryptjs';
export default (req,res,next)=>{
    let password = req.body.password
    let hashPassword = bcryptjs.hashSync(
        password, 
        10              // nivel de seguridad confiable 

    )
    req.body.password = hashPassword
    return next()

}