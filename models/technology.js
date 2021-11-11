const mongoose = require("mongoose") 
const technologySchema = mongoose.Schema({
    
        type: String,
        estblishementdate:  String,
        Areas_of_technology: String
        
}) 
 
module.exports = mongoose.model("technology", technologySchema)