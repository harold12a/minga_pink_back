import Author from "../models/Author"
import Company from "../models/Company"

// esat funcion sirve para verificar que el usuario valla hacer el crud 
export default async (req,res,next) =>{
    // req.user tiene los datos del user
    // debio buscar un autor/empresa
    // que coincida que su user_id sea igual al id de ese USER
    if(req.user.role ===1 || req.user.role ===2){

        let author = await Author.findOne({user_id:req.user._id})
        if(author){
            req.body.author_id = author._id
            return next()
        }
        let company = await Company.findOne({user_id:req.user._id})
        if(company){
            req.body.company_id = company._id
            return next()
        }    
    }
    return res.status(404).json({
        success: true,
        response:null,
        message: 'not allow'
    })
}