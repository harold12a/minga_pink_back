import bcryptjs from 'bcryptjs';
export default (req,res,next)=>{
    let password_from_from = req.body.password
    let password_from_mongo = req.user.password
    let compare = bcryptjs.compareSync(
        password_from_from,
        password_from_mongo
    )
    if(compare){
        delete req.user.password
        return next()
    }
    return res.status(400).json({
        success: false,
        messages:['invalid credentials']
    })
   
}