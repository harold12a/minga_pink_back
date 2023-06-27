import bcryptjs from 'bcryptjs'

export default (req,res,next)=> {
    let password = req.body.password
    let hashPassword = bcryptjs.hashSync(
        password,       //contraseña a hashear
        10              //nivel de seguridad de contraseña
    )
    req.body.password = hashPassword
    return next()
    //siempre hay que hashear la contraseña
    //por lo que este middleware en particular es DE LOS POCOS que no tienen un condicional

}