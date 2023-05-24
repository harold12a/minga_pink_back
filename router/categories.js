import { Router } from "express"
import read from "../controllers/categories/read.js"
import create from "../controllers/authors/create.js"

let categoriesRouter = Router()

categoriesRouter.get('/',read)
categoriesRouter.post('/',create)

export default categoriesRouter