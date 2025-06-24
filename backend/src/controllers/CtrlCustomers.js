const customersController = {};
import customersModel from "../models/Customers.js";

//SELECT*******************************************************************
customersController.getCustomers = async(req, res) =>{
    const customer = await customersModel.find();

    res.json(customer)
}

//INSERT*******************************************************************
customersController.postCustomers = async(req, res) =>{
    const{ name, lastName, email, password, phone, weight, dateBirth, height, address, gender, idProduct, isVerified } = req.body;
    const newCustomer = new customersModel({name, lastName, email, password, phone, weight, dateBirth, height, address, gender, idProduct, isVerified})
    await newCustomer.save();

    res.json({message: "Customer saved"})
}

//DELETE*******************************************************************
customersController.deleteCustomers = async(req,res) =>{
    await customersModel.findByIdAndDelete(req.params.id)

    res.json({message: "Customer deleted"})
}

//UPDATE*******************************************************************
customersController.putCustomers = async(req, res)=>{
    const{ name, lastName, email, password, phone, weight, dateBirth, height, address, gender, idProduct, isVerified } = req.body;
    const updateCustomer = await customersModel.findByIdAndUpdate(req.params.id, {name, lastName, email, password, phone, weight, dateBirth, height,
                                                                                address, gender, idProduct, isVerified}, {new: true})

    res.json({message: "Customer updated successfully"})
}

export default customersController;