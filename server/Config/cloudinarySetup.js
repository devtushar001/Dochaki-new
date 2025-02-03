import { v2 as cloudinary } from "cloudinary";

const cloudinarySetup = (cloudeName, cloudApiKey, cloudApiSecret) => {
    cloudinary.config({
        cloud_name: cloudeName,
        api_key: cloudApiKey,
        api_secret: cloudApiSecret,
    });
    console.log(`Cloudinary connected successfully ${cloudeName}`)
    console.log(`Cloudinary connected successfully ${cloudApiKey}`)
    console.log(`Cloudinary connected successfully ${cloudApiSecret}`)
}


export default cloudinarySetup;