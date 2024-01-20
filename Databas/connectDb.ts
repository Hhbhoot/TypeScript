import mongoose from "mongoose";
import { response} from "express";

export async function connect() {
    try {
    await mongoose.connect(`${process.env.MANGO_DB_URL}`);
    console.log("DB connected..")

    } catch (error) {
    console.log(error);
    return response.json(error) 
    }
}
      
