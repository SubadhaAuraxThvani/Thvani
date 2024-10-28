import mongoose,{Schema,Document} from "mongoose";

const inventorySchema:Schema = new mongoose.Schema({
    product_id : {type:Number, unique:true},
    stock_quantity: {type:String, },
    warehouse_location: {type:String,},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const inventoryModel = mongoose.model('inventory',inventorySchema); 

export default inventoryModel;