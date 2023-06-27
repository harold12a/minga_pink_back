import bcryptjs from 'bcryptjs'

export default (req,res,next)=> {
    let password_from_form = req.body.password
    let password_from_mongo = req.user.password
    let compare = bcryptjs.compareSync(
        password_from_form,
        password_from_mongo
    )   //el método va a comparar ambas contraseñas y va a devolver un booleano
        //si la comparación resulta exitosa devuelve TRUE
        //si resulta un fracaso devuelve FALSE
    if (compare) {
        delete req.user.password
        return next()
    }
    return res.status(400).json({
        success: false,
        messages: ['invalid credentials!']
    })
}