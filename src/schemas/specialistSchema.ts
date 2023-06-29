import mongoose from "mongoose";

const { Schema , model }= mongoose

const specialistSchema= new Schema({
    _id: {
        type: Number,
        _id : false
    },
    name: {
        type: String,
        require: true
    }

})

const specialistModel = model('specialist_list', specialistSchema)

export default specialistModel




