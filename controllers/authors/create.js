import Author from "../../models/Author.js"
export default async (req, res, next) => {
    try {
        let data = req.body
        data.user_id = req.user_id
        let one = await Author.create(data)

        return res.status(201).json({
            success: true,
            response: one,
            message: 'created'
        })

    } catch (error) {
        next(error);
    }
}

