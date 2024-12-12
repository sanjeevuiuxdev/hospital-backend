const mongoose = require("mongoose")

const patientModel = mongoose.Schema(
    {
        name: String,
        disease: String,
        phoneno: Number,
        address: String,
        gender : String,
        emergency : Boolean,
        remark : String
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model("patientModel", patientModel)