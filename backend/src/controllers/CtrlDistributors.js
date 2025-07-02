const distributorsController = {};
import distributosModel from "../models/Distributors.js";

//SELECT*******************************************************************
distributorsController.getDistributors = async(req, res) =>{
    const distributor = await distributosModel.find();

    res.json(distributor)
}

//INSERT*******************************************************************
distributorsController.postDistributors = async(req, res) =>{
    const{ companyName, email, password, address, phone, status, taxId, isVerified } = req.body;
    const newDistributor = new distributosModel({companyName, email, password, address, phone, status, taxId, isVerified})
    await newDistributor.save();

    res.json({message: "Distributor saved"})
}

//DELETE*******************************************************************
distributorsController.deleteDistributors = async(req,res) =>{
    await distributosModel.findByIdAndDelete(req.params.id)

    res.json({message: "Distributor deleted"})
}

//UPDATE*******************************************************************
distributorsController.putDistributors = async(req, res)=>{
    const{ companyName, email, password, address, phone, status, taxId, isVerified } = req.body;
    const updateDistributor = await distributosModel.findByIdAndUpdate(req.params.id, {companyName, email, password, 
                                                                                    address, phone, status, taxId, isVerified}, {new: true})

    res.json({message: "Distributor updated"})
}

export default distributorsController;