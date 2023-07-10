import joi from 'joi-oid'

const schema = joi.object({
    manga_id: joi.objectId(),
    title: joi.string()
        .min(1)
        .max(50)
        .required()
        .messages({
            'any.required': 'title is required',
            'string.min': 'title must have at least one character',
            'string.max': 'the title must not exced 50 characters'
        }),
    cover_photo: joi.string()
        .min(10)
        .required()
        .messages({

        }),
    pages: joi.string()
        .required()
        .messages({

        }),
    order: joi.number()
        .min(1)
        .required()
        .messages({

        }),

})

export default schema