import { Schema,model } from 'mongoose'

let collection = 'users'
let schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, default:'https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg'},
    role: {type: Number, default:0},
    online:{type: Boolean, default: false}
},{
    timestamps:true
})

let User = model(collection, schema)
export default User