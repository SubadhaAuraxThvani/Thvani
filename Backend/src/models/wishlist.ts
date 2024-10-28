import mongoose,{Schema,Document} from "mongoose";

const wishlistSchema:Schema = new mongoose.Schema({
    userid : {type:Number, unique:true},
    product_id: {type:String, index:true},
    is_deleted: {type:Boolean,default:false},
    
},{timestamps:true});

const wishlistModel = mongoose.model('wishlist',wishlistSchema); 

export default wishlistModel;