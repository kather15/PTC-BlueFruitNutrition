const productsController = {};
import productsModel from "../models/Products.js"

//SELECT*************************************************
productsController.getProducts = async (req, res) =>{
    const products =await productsModel.find().populate("idNutritionalValues")
    res.json(products)
}

//INSERT*************************************************
productsController.postProducts = async (req, res) =>{
    const {  name, descripion, flavor, price, idNutritionalValues } =req.body;
    const newProduct = new productsModel({ name, descripion, flavor, price, idNutritionalValues, })
    await newProduct.save()

    res.json({message: "Product saved"})
}

//DELETE*************************************************
productsController.deleteProducts = async (req, res) =>{
    await productsModel.findByIdAndDelete(req.params.id)

    res.json({message: "Product deleted"})
}

//UPDATE*************************************************
productsController.putProducts = async (req, res) =>{
    const {  name, descripion, flavor, price, idNutritionalValues  } =req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(req.params.id, {name, descripion, flavor, price, idNutritionalValues}, {new:true})

    res.json({message: "Products updated successfully"})
};

export default productsController;