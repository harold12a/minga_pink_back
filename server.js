// import express from 'express';
import 'dotenv/config.js'

// const server = express();

// const PORT = 8080;
const PORT = process.env.PORT || 8080
// const ready = () => console.log('ready  on '+ PORT);
 
// server.listen(PORT, ready);
console.log(PORT);