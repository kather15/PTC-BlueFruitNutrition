import express from "express";
import registerCustomersController from "../controllers/CtrlRegisterCustomers.js";

const router = express.Router();

//1-
router.route("/").post(registerCustomersController.register);

//2-
router.route("/verifyCodeEmail").post(registerCustomersController.verificationCode); //para ingresar el token poner: "requireCode": "(token)"


export default router;