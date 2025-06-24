import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import productsRoutes from "./src/routes/products.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);



export default app;