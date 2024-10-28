
import { Router,Request,Response } from "express";
import contactusModel from "../models/contactus";
import driverReasonConfig from '../configData/contactformReason.json'


const ContactusRouter = Router()

ContactusRouter.post('/', async (req: Request, res: Response) => {
    try {
        const data = req?.body;

        if(!data?.name || data?.name?.length === 0){
            return res.status(400).send({message:'Contact name is required'})
            
        }
        if(!data?.email || data?.email?.length === 0){
            return res.status(400).send({message:'Contact email is required'})
        }

        if(!data?.phone || data?.phone?.length === 0){
            return res.status(400).send({message:'Contact phone is required'})
            
        }
        // if(!data?.reason || data?.reason?.length === 0 || !driverReasonConfig){
        //     return res.status(400).send({message:'Contact reason is required and must be valid'});
        // }
        if(!data?.message || data?.message?.length === 0){
            return res.status(400).send({message:'Contact message is required'})
        }

            const response = await contactusModel.create(data);
            res.send(response);
       
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send({ message: 'An error occurred' });
    }
});


export default ContactusRouter