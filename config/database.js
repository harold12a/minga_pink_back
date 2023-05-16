import mongoose from "mongoose";

// tres formas de hacerlo diferentes    1

// let link = process.env.MONGO_URI;
// mongoose.connect(link)

// .then(()=>{console.log('database connect true')})
// .catch(error=>console.log(error))


//      2
async function  connect_db(){
    try {
        let link = process.env.MONGO_URI;
        await mongoose.connect(link);
        console.log('Database connect true');
      } catch (error) {
        console.log(error);
      }
}
connect_db()

//     3
//   try {
//     let link = process.env.MONGO_URI;
//     await mongoose.connect(link);
//     console.log('Database connect true');
//   } catch (error) {
//     console.log(error);
//   }