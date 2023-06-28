import mongoose from "mongoose";

const { Schema , model }= mongoose

const specialistSchema= new Schema({
    _id: {
        type: Number,
        _id : false
    },
    name: {
        type: Number,
        require: true
    }

})

const specialistModel = model('specialis_list', specialistSchema)

export default specialistModel