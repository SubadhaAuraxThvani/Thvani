import mongoose,{Schema,Document} from "mongoose";

const usersSchema:Schema = new mongoose.Schema({
    User_id: {type: Number,unique: true},
    name: {type:String, index:true},
    email: {type:String},
    hased_password: {type:String},
    phone: {type:String},
    role: {type:String},
    address: {type:String},
    created_at: {type: Date},
    updated_at: {type: Date},
    deleted_at: {type: Date},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const usersModel = mongoose.model('users',usersSchema); 

export default usersModel;