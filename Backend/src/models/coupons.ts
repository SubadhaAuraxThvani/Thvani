import mongoose,{Schema,Document} from "mongoose";

const couponSchema:Schema = new mongoose.Schema({
    coupon_id : {type:Number, unique:true},
    code: {type:String, index:true},
    discount: {type:Number},
    start_date: {type:Date},
    end_date: {type:Date},
    is_active: {type:Boolean,default:false},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const couponModel = mongoose.model('coupon',couponSchema); 

export default couponModel;