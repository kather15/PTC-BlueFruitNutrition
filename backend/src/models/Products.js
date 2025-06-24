/* fields:
    name, descripion, flavor, price, content, idNutritionalValues, idSports
*/

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

    idNutritionalValues: {
        type: Schema.Types.ObjectId,
        ref: nutritionalValues,
        require: true
    },


}, {
    //tabla auditoria PRO
    timestamps: true,
    strict: false
})


export default model("Products", productsSchema);