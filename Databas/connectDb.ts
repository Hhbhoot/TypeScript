import mongoose from "mongoose";
import { response} from "express";

export async function connect() {
    try {
    // await mongoose.connect("mongodb+srv://hitesh0072:Hitesh123%40@cluster0.z6nwigf.mongodb.net/TypeScript");
    await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log("DB connected..")

    } catch (error) {
    console.log(error);
    return response.json(error) 
    }
}
      
