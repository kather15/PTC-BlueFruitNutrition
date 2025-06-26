import { Schema, model } from "mongoose";   

const productsSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    flavor:{
        type: String,
        require: true,
    },

    price:{
        type: Number,
        require: true,
        min: 0
    },

    image:{
        type: String,
        require: false
    },

    idNutritionalValues: {
        type: Schema.Types.ObjectId,
        ref: "NutritionalValues",  // Corregido aquí
        require: true
    },

}, {
    timestamps: true,
    strict: false
})

export default model("Products", productsSchema);
