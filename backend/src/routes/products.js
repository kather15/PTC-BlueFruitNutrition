import express from "express";
import productsController from "../controllers/CtrlProducts.js";

const router = express.Router()

//son los metodos que va tener products
router.route("/")
.get(productsController.getProducts)
.post(productsController.postProducts)

//estos van a tener un id, por eso se pone ("/:id")
router.route("/:id")
.delete(productsController.deleteProducts)
.put(productsController.putProducts)

export default router;