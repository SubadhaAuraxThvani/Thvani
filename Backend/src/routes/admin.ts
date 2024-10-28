import { Router,Request,Response } from "express";
import productsModel from "../models/products";
import categoryModel from "../models/category";


const adminRouter = Router();

adminRouter.post('/create-product', async (req: Request, res: Response) => {
    try {
        const data = req.body;

        const newProduct = new productsModel({
            product_id: data.product_id,
            name: data.name,
            description: data.description,
            price: data.price,
            category_id: data.category_id,
            brand_id: data.brand_id,
            stock: data.stock,
            rating: data.rating,
            images: data.images,
            is_active: data.is_active ?? true,
            is_in_stock: data.is_in_stock ?? true,
            is_sold_out: data.is_sold_out ?? false,
            created_at: new Date(),
            updated_at: new Date()
        });

        
        const createProduct = await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: createProduct
        });
    } catch (error:any) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Failed to create product",
            error: error.message
        });
    }
} )


adminRouter.post('/create-category', async (req: Request, res: Response) => {
    try {
        const data = req?.body;

        // if(!data?.category_id || data?.category_id?.length === 0){
        //     return res.status(400).send({message:'Contact name is required'})
            
        // }
        if(!data?.name || data?.name?.length === 0){
            return res.status(400).send({message:'Contact email is required'})
        }


            const response = await categoryModel.create(data);
            res.send(response);
       
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send({ message: 'An error occurred' });
    }
});



export default adminRouter