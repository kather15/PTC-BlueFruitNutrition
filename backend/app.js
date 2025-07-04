import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import productsRoutes from "./src/routes/products.js";
import customersRouter from "./src/routes/customers.js";
import distributorsRoutes from "./src/routes/distributors.js"
import registerCustomersRoutes from "./src/routes/registerCustomer.js"
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    // Permitir envío de cookies y credenciales
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRouter);
app.use("/api/distributors", distributorsRoutes);
app.use("/api/registerCustomers", registerCustomersRoutes)
app.use("/api/passwordRecovery", passwordRecoveryRoutes);



export default app;