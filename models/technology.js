 const mongoose = require("mongoose")
 const technologySchema = mongoose.Schema({

type:{
    type: String,
    minLength: 7,
    maxLength: 50
},

estblishementdate : {
    type:String,
    
},

Areas_of_technology: {
    type:String,
    min:4,
    max:500
}
})
module.exports = mongoose.model("technology",technologySchema)














