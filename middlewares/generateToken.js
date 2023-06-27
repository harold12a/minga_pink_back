import jwt from 'jsonwebtoken'

export default (req,res,next)=> {
    let token = jwt.sign(
        { email:req.body.email },   //objeto a transformar
        process.env.SECRET,         //llave para tokenizar
        { expiresIn: 60*60*24*7 }   //tiempo de expiración
    )
    req.token = token
    return next()
    //otro de los pocos middlewares que NO CONDICIONA
}