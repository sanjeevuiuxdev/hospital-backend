const express = require("express")
const router = express.Router()

const {createPatient,getAllPatient,deletePatient,editPatient,getSinglePatientData,searchSinglePatient} = require("../Controllers/Patient_Controller")

router.post("/create",createPatient)
router.get("/get/all/patient",getAllPatient)
router.delete("/delete/patient/:id",deletePatient)
router.patch("/update/patient/:id",editPatient)
router.get("/patient/:id",getSinglePatientData)
router.get("/search/patient/:search",searchSinglePatient)


module.exports = router