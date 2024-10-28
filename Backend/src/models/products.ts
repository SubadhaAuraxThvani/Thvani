import mongoose,{Schema,Document} from "mongoose";

const productsSchema:Schema = new mongoose.Schema({
    product_id: {type: Number,unique: true},
    name: {type:String, index:true},
    description: {type:String},
    price: {type:String},
    category_id: {type:String},
    brand_id: {type:String},
    stock: {type:String},
    rating: {type:String},
    images: {type: Array},
    is_active: {type: Boolean,default:true},
    is_in_stock: {type: Boolean,default:true},
    is_sold_out: {type: Boolean,default:false},
    created_at: {type: Date},
    updated_at: {type: Date},
    deleted_at: {type: Date},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const productsModel = mongoose.model('products',productsSchema); 

export default productsModel;