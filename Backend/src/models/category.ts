import mongoose,{Schema,Document} from "mongoose";

const categorySchema:Schema = new mongoose.Schema({
    category_id : {type:Number, unique:true},
    name: {type:String, index:true},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const categoryModel = mongoose.model('category',categorySchema); 

export default categoryModel;