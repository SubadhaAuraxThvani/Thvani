import mongoose,{Schema,Document} from "mongoose";

const contactusSchema:Schema = new mongoose.Schema({
    
    name: {type:String, index:true},
    email: {type:String},
    reason: {type:String},
    phone: {type:String},
    message: {type:String},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const contactusModel = mongoose.model('contactus',contactusSchema); 

export default contactusModel;