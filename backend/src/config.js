import dotenv from "dotenv";

dotenv.config();

//INFO DEL .ENV
export const config={
    db:{
        URI: process.env.MONGO_URI
    },

    server:{
        port: process.env.PORT
    }
}