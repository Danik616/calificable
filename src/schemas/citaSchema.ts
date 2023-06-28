import mongoose from "mongoose";

const { Schema , model }= mongoose

const citaSchema= new Schema({
    _id: {
        type: String
    },
    id_paciente: {
        type: String,
        require: true
    },
    speciality:{
        type: String,
        require: true
    },
    doctor:{
        type: String,
        require: true
    }

})

const citaModel = model('citas', citaSchema)

export default citaModel