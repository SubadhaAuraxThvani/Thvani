import mongoose,{Schema,Document} from "mongoose";

const ordersSchema:Schema = new mongoose.Schema({
    order_id: {type: Number,unique: true},
    user_id:{type: Number,unique: true},
    products :{},
    total_price: {type:String},
    category_id: {type:String},
    brand_id: {type:String},
    stock: {type:String},
    shipping_address: {type:String},
    images: {type: Array},
    is_active: {type: Boolean,default:true},
    order_status: {type: Boolean,default:true},
    payment_status: {type: Boolean,default:false},
    order_date: {type:Date},
    delivery_date: {type:Date},
    created_at: {type: Date},
    updated_at: {type: Date},
    deleted_at: {type: Date},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const ordersModel = mongoose.model('orders',ordersSchema); 

export default ordersModel;