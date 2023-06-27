import { Router } from "express";
import read from '../controllers/auth/read.js';
import register from '../controllers/auth/register.js';
import signin from "../controllers/auth/signin.js";

import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import accountNotExists from "../middlewares/accountNotExists.js"
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from '../middlewares/generateToken.js'

let authsRouter = Router();

authsRouter.get('/',read)
authsRouter.post('/register', /* validator, accountExists, createHash, */accountExists,createHash,register) 
authsRouter.post('/signin', /* validator,accountNotExists, passwordIsValid, generatetoken */accountNotExists,isValidPassword,generateToken,signin)

export default authsRouter
