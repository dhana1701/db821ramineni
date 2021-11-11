const mongoose = require("mongoose") 
const technologySchema = mongoose.Schema({
    
    technology_name: {
        type: String,
        minlength: 4
},
    estblishementdate: {
        type:  Number,
        minLength: 4
},
    Areas_of_technology: {
        type: String,
        minLength: 5
}
}) 
 
module.exports = mongoose.model("technology", technologySchema)