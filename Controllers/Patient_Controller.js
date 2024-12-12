const patientModel = require("../Models/Patient_Model")


// create patient

const createPatient = async (req,res) => {
    try {
        const patient = new patientModel({...req.body})
        const create = await patient.save()
        res.status(200).send({success : true, message : "patient created successfully",create})
    } catch (error) {
        console.log(error);
    }
}

// get all patient

const getAllPatient = async (req,res) => {
    try {
        const get_All_Patient = await patientModel.find()
        res.status(200).send({success:true,message:"get all patient successfully",get_All_Patient})
    } catch (error) {
        console.log(error);
    }
}

// delete patient

const deletePatient = async (req,res) => {
    const id = req?.params?.id
    try {
        const delete_Patient = await patientModel.findByIdAndDelete({_id:id})
        res.status(200).send({success:true,message:"delete successfully",delete_Patient})
    } catch (error) {
        console.log(error);
    }
}

// edit patient

const editPatient = async (req,res) => {
    const id = req?.params?.id
    try {
        const edit_Patient = await patientModel.findByIdAndUpdate({_id:id} , {$set:req?.body},{new:true})
        res.status(200).send({success:true,message:"patient update successfully",edit_Patient})
    } catch (error) {
        console.log(error);
    }

}

// single patient data
const getSinglePatientData = async (req,res) => {
    const id = req?.params?.id
    try {
       const singlePatient =  await patientModel.findById({_id:id})
       res.status(200).send({success:true,message:"Patient Data Found Successfully",singlePatient})
    } catch (error) {
        console.log(error);
    }
}

const searchSinglePatient = async (req,res) => {
    const value = req?.params?.search;
    const searchRegex = new RegExp(value,"i")
    try {
        console.log("value,",value);
        console.log("searchRegex",searchRegex);
        const search_Patient = await patientModel.find({name:{$regex:searchRegex}})
        res.status(200).send({success:true,message:"patient searched",search_Patient})
    } catch (error) {
        console.log(error);
    }
}


module.exports = {createPatient,getAllPatient,deletePatient,editPatient,getSinglePatientData,searchSinglePatient}