import mongoose,{Schema,Document} from "mongoose";

const brandSchema:Schema = new mongoose.Schema({
    brand_id : {type:Number, unique:true},
    name: {type:String, index:true},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const brandModel = mongoose.model('brand',brandSchema); 

export default brandModel;