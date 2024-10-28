import { Router } from "express";
import imageUpload from "./images";
import ContactusRouter from "./contactus";
import adminRouter from './admin'
import categoriesRouter from "./categories";


const Routers = Router()

Routers.use('/contact', ContactusRouter)
Routers.use('/admin', adminRouter)
Routers.use('/category', categoriesRouter)
Routers.use('/s3bucket', imageUpload) 


export default Routers;