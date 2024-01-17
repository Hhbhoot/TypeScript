import Order from "../../model/order.model";
import { Request, Response } from "express";
import { orderService } from "../../service/order.service";
const OrderService = new orderService();

export const getAllOrder = async (req: Request, res: Response) => {
  try {
    let orders = await OrderService.findAllOrders();
    if (orders) {
      return res.status(200).json(orders);
    } else {
      return res.json({ message: "Orders not found.. " });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const getSpecificUserOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    let order = await OrderService.findOrderByUserId(userId);
    if (order) {
      return res.status(200).json(order);
    } else {
      return res.status(404).json({ message: "Order not found.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error.." });
  }
};
