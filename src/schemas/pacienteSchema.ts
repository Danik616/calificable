import mongoose from "mongoose";

const { Schema , model }= mongoose

const pacienteSchema= new Schema({
    
    name: {
        type: String,
        require: true
    },
    surname:{
        type: String,
        require: true
    },
    id:{
        type: Number,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true,
        unique: true
    },
    tel: {
        type: Number,
        require: true
    }
})

const pacienteModel = model('paciente', pacienteSchema)

export default pacienteModel