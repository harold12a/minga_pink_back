import { Router } from "express";
import read from '../controllers/auth/read.js';
import register from '../controllers/auth/register.js';
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import singin from "../controllers/auth/singin.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";

let authsRouter = Router();

authsRouter.get('/',read)
authsRouter.post('/register',accountExist,createHash,register) 
authsRouter.post('/singin',accountNotExists,isValidPassword,generateToken,singin)

export default authsRouter
