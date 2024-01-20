import Order from "../../model/order.model";
import Cart from "../../model/cart.model";
import { Request, Response } from "express";
import { orderService } from "../../service/order.service";
import { IOrder } from "../../interfaces/IOrder.interface";
const OrderService = new orderService();
import { cartService } from "../../service/cart.service";
const CartService = new cartService();
import mongoose, { startSession } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const addToOrder = async (req: Request, res: Response) => {
  try {
    let isCart = await CartService.findCartAndPopulate(req.user._id);
    if (isCart.length == 0) {
      return res.json({ message: "Cart not found.." });
    }
    //  console.log(isCart);
    let orderItems = isCart.map((item) => ({
      cartitem: item.cartitem,
      rentPerMonth: item.rentPerMonth,
      totalMonth: item.rentalTimeInMonth,
    }));

    let totalAmount = orderItems.reduce(
      (total, val) => (total += val.totalMonth * val.rentPerMonth),
      0
    );

    let startDate = new Date();
    let endDate = new Date();
    endDate.setMonth(startDate.getMonth() + 1);

    let newOrder = await Order.create({
      user: req.user._id,
      item: orderItems,
      startDate: startDate,
      endDate: endDate,
      totalAmount: totalAmount,
    });

    await Cart.updateMany(
      { user: req.user._id, isDelete: false },
      { $set: { isDelete: true } },
      { new: true }
    );
    if (newOrder) {
      return res.json({
        message: "Order placed successfully..",
        Data: newOrder,
      });
    } else {
      return res.json({ message: "Something went wrong.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const cancelOrder = async (req: Request, res: Response) => {
  try {
    const {orderId } = req.body;
    let order: any = await OrderService.findOrderAndUpdate(orderId);
    if (order) {
      return res.status(200).json({ message: "Order canceled successfully.." });
    } else {
      return res.status(404).json({ message: "Order not found.." });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error..", Error: error });
  }
};
