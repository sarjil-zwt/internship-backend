const db = require("../models");

const Order = db.order;
const OrderItem = db.orderItem;
const Product = db.product;
const ShippingType = db.shippingType;

exports.createOrder = async (req, res, next) => {
  try {
    const { shippingAddress, billingAddress, paymentId, paymentStatus, cart } =
      req.body;
    const { total, discount, couponcode, ShippingTypeId } = cart;

    let newOrder = await Order.create({
      total,
      discount,
      couponcode,
      shippingAddress,
      billingAddress,
      paymentId,
      paymentStatus,
      ShippingTypeId,
      UserId: req.user.id,
    });

    cart.CartItems.forEach(async (ci) => {
      await OrderItem.create({
        OrderId: newOrder.id,
        ProductId: ci.ProductId,
      });
    });

    newOrder = await Order.findOne({
      where: {
        id: newOrder.id,
      },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
            },
          ],
        },
        {
          model: ShippingType,
        },
      ],
    });

    res.status(201).json({
      status: 201,
      success: true,
      message: "Order created Successfully!",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
