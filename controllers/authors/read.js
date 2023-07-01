import Author from "../../models/Author.js";

export default async (req,res, next)=>{
        try {
            let all = await Author.find()
            if(all){
                return res.status(200).json({
                    response: all,
                    message:' authors founds!'
                })
            }else{
                return res.status(404).json({
                    response: null,

                    message:'  authors NOT founds!'

                });
            }
        } catch (error) {
            return res.status(500).json({
                        response: null,
                        message: 'error'
                   })
        }
    }

