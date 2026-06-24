const mongoose = require("mongoose");
const goalSchema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},


title:{
    type:String,
    required:true
},


description:{
    type:String
},


priority:{
    type:String,
    default:"MEDIUM"
},


progress:{
    type:Number,
    default:0
},


deadline:String,


milestones:String,


velocity:String,


streak:String


},{
timestamps:true
});


module.exports =
mongoose.model("Goal",goalSchema);