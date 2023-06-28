import mongoose from "mongoose";

const { Schema , model }= mongoose

const doctorSchema= new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    surname:{
        type: String,
        require: true
    },
    speciality:{
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    consulting: {
        type: String,
        require: true
    }
})

const doctorModel = model('doctor', doctorSchema)

export default doctorModel