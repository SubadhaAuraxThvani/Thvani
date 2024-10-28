import { Router, Request, Response } from 'express'
import crypto from 'crypto'
import aws from 'aws-sdk'
import { promisify } from "util"


const randomBytes = promisify(crypto.randomBytes)

import dotenv from 'dotenv';
dotenv.config()

const bucketName:any = process.env.BUCKET_NAME
const bucketRegion:any = process.env.BUCKET_REGION
const accessKey:any = process.env.ACCESS_KEY
const secretAccessKey:any = process.env.SECRET_ACCESS_KEY

const imageUpload = Router()

const preS3 =  new aws.S3({
    region:bucketRegion,
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
    signatureVersion: 'v4'
  })


  imageUpload.get('/get-url',async (req: Request, res: Response) => {
    const rawBytes = await randomBytes(16)
      const imageName = rawBytes.toString('hex')
      // ${imageName}
      const params = ({ 
        Bucket: bucketName,
        
        Key: `images/${imageName}`,
        Expires: 60,
        
      })
      
      const uploadURL = await preS3.getSignedUrlPromise('putObject', params)
      return res.status(200).send(uploadURL)
    } )
    


    
    
export default imageUpload