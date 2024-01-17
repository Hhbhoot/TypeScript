import Order from "../model/order.model";

export class orderService {
      
    findAllOrders=async () => {
        return await Order.find();
        
    }
    findOrderByUserId =  async(id:string)=>{
          return await Order.findOne({user : id , isDelete : false })
    }

    findOrderAndUpdate = async(id: string )=>{
          return await Order.findOneAndUpdate({_id : id,isDelete :false  },{ $set : { isDelete: true}})
    };
    
//   

}