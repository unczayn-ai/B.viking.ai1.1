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


milestones:[
    {
        title:{
        type:String,
        required:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        completedAt:{
            type:Date,
        }
    }
],

activity: [
    {
        type: {
            type: String,
            enum:[
                "MILESTONE_COMPLETED",
                "MILESTONE_ADDED",
                "MILESTONE_UPDATED",
                "PROGRESS_UPDATED",
            ],
        },
        message: String,
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
],


velocity:String,


streak:String


},{
timestamps:true
});


module.exports = mongoose.model("Goal",goalSchema);