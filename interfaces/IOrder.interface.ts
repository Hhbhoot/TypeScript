import { Types , Schema } from "mongoose";

interface cartitem{
        cartitem : Schema.Types.ObjectId
}
  
   
   export interface IOrder extends Document {
       user: Schema.Types.ObjectId;
       item: cartitem[];
       startDate: Date;
       endDate: Date;
       totalAmount: number;
       status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
       isDelete: boolean;
   }
