import mongoose from "mongoose";

const { Schema , model }= mongoose

const citaSchema= new Schema({
    id_paciente: {
        type: Number,
        require: true,
        unique:true
    },
    speciality:{
        type: Number,
        require: true
    },
    doctor:{
        type: String,
        require: true
    }

})

const citaModel = model('citas', citaSchema)

export default citaModel