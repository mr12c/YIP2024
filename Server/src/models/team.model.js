import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    school:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'School',
        required:true
    },
    division:{
        type:String,
        required:true
    },
    problemStatement:{
        type:String,
        required:true
    },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Mentor',
        required:true
    }
    ,
    students:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Student',
        required:true
    },
    paymentStatus:{
        type:Boolean,
        default:false
    }


},{timestamps:true})

const Team = mongoose.model('Team', teamSchema)

export default Team;

