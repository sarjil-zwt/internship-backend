// const User = require("../models/userModel");
const db = require("../models");

const Cart = db.cart;
const CartItem = db.cartItem;
const Product = db.product;

const cartCalculator = async (id) => {
  let cart = await Cart.findOne({
    where: { UserId: id },
    include: [
      {
        model: CartItem,
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  });

  console.log(cart.discount, "cart discount");

  let total = 0;

  cart.CartItems.map((ci) => {
    total += ci.quantity * ci.Product.price;
  });

  console.log(cart.total, "cart total");

  let discountedPrice = ((100 - cart.discount) * total) / 100;

  console.log(discountedPrice, "cart total after discount");

  discountedPrice += cart.shipping;

  console.log(discountedPrice, "cart total after shipping");

  await Cart.update({ total: discountedPrice }, { where: { id: cart.id } });

  cart = await await Cart.findOne({
    where: { UserId: id },
    include: [
      {
        model: CartItem,
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  });

  return cart;
};

exports.getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
    });

    if (!cart) {
      cart = await Cart.create({
        UserId: req.user.id,
      });
    }

    cart = await Cart.findOne({
      where: { UserId: req.user.id },
      include: [
        {
          model: CartItem,
          include: [
            {
              model: Product,
            },
          ],
        },
      ],
    });

    res.status(201).json({
      status: 201,
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error creating cart:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.addProductToCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
      raw: true,
    });

    if (!cart) {
      cart = await Cart.create({
        UserId: req.user.id,
      });
    }

    // console.log(cart.id, "&&&&&&&&");

    //creating cartitem if not wexist
    let cartItem = await CartItem.findOne({
      where: {
        CartId: cart.id,
        ProductId: req.body.product,
      },
    });

    if (!cartItem) {
      cartItem = await CartItem.create(
        {
          CartId: cart.id,
          ProductId: req.body.product,
          quantity: req.body.quantity,
        },
        { raw: true }
      );
      console.log(
        cartItem
        // "*************************** Cartitem ********** created"
      );
    } else {
      console.log(
        cartItem
        // "*************************** Cartitem before update"
      );
      await CartItem.update(
        {
          quantity: cartItem.quantity + req.body.quantity,
        },
        {
          where: {
            id: cartItem.id,
          },
        }
      );
    }

    cart = await cartCalculator(req.user.id);

    // console.log(cart.CartItems, "**********************************");

    res.status(201).json({
      status: 201,
      success: true,
      message: "Product added successfully",
      cart,
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.removeProductFromCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
      raw: true,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Cart not found",
      });
    }

    // console.log(cart.id, "&&&&&&&&");

    //creating cartitem if not wexist
    let cartItem = await CartItem.findOne({
      where: {
        CartId: cart.id,
        ProductId: req.params.id,
      },
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "CartItem not found",
      });
    }

    CartItem.destroy({
      where: {
        id: cartItem.id,
      },
    });

    cart = await cartCalculator(req.user.id);

    res.status(200).json({
      success: false,
      status: 200,
      message: "CartItem deleted",
      cart,
    });
  } catch (error) {
    console.error("Error removing product from cart:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.setCartProductQuantity = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
      raw: true,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Cart not found",
      });
    }

    // console.log(cart.id, "&&&&&&&&");

    //creating cartitem if not wexist
    let cartItem = await CartItem.findOne({
      where: {
        CartId: cart.id,
        ProductId: req.body.product,
      },
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "CartItem not found",
      });
    }

    await CartItem.update(
      { quantity: req.body.quantity },
      {
        where: {
          id: cartItem.id,
        },
      }
    );

    cart = await cartCalculator(req.user.id);

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Quantity set successfully!",
      cart,
    });
  } catch (error) {
    console.error("Error setting quantity of product of cart:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

const discountCodes = [
  {
    code: "DIS40",
    discount: 40,
  },
  {
    code: "DIS10",
    discount: 10,
  },
  {
    code: "SAR05",
    discount: 5,
  },
  {
    code: "DIS20",
    discount: 20,
  },
  {
    code: "MYDIS17",
    discount: 17,
  },
  {
    code: "YOUDIS60",
    discount: 60,
  },
  {
    code: "NEWUSER50",
    discount: 50,
  },
];

exports.addDiscountCode = async (req, res, next) => {
  try {
    const discountCode = req.body.discountCode;

    const code = discountCodes.find((c) => c.code === discountCode);

    if (code) {
      await Cart.update(
        { discount: code.discount },
        {
          where: {
            UserId: req.user.id,
          },
        }
      );

      const cart = await cartCalculator(req.user.id);

      return res.status(200).json({
        success: true,
        status: 200,
        message: "Discount Applied",
        cart,
      });
    } else {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "DiscountCode not found",
      });
    }
  } catch (error) {
    console.error("Error adding discount to cart:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.removeDiscountCode = async (req, res, next) => {
  try {
    await Cart.update(
      { discount: 0 },
      {
        where: {
          UserId: req.user.id,
        },
      }
    );
    const cart = await cartCalculator(req.user.id);

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Discount removed",
      cart,
    });
  } catch (error) {
    console.error("Error adding discount to cart:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};