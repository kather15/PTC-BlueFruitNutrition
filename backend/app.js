import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import productsRoutes from "./src/routes/products.js";
import customersRouter from "./src/routes/customers.js";
import distributorsRoutes from "./src/routes/distributors.js"
import registerCustomersRoutes from "./src/routes/registerCustomer.js"

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRouter);
app.use("/api/distributors", distributorsRoutes);
app.use("/api/registerCustomers", registerCustomersRoutes)



export default app;