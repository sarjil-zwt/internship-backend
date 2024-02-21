"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, DataTypes);
db.Product = require("./product")(sequelize, DataTypes);
db.Group = require("./group")(sequelize, DataTypes);
db.Category = require("./category")(sequelize, DataTypes);
db.SubCategory = require("./subcategory")(sequelize, DataTypes);

db.Cart = require("./cart")(sequelize, DataTypes);
db.CartItem = require("./cartitem")(sequelize, DataTypes);
db.ShippingType = require("./shippingtype")(sequelize, DataTypes);
db.Review = require("./reviews")(sequelize, DataTypes);
db.Address = require("./address")(sequelize, DataTypes);
db.Order = require("./order")(sequelize, DataTypes);
db.OrderItem = require("./orderitem")(sequelize, DataTypes);

db.User.hasOne(db.Cart, {
  foreignKey: "iUserId",
  onDelete: "cascade",
});
db.Cart.belongsTo(db.User, {
  foreignKey: "iUserId",
});

// ShippingType and Cart
db.ShippingType.hasMany(db.Cart, {
  foreignKey: "iShippingTypeId",
  onDelete: "cascade",
});
db.Cart.belongsTo(db.ShippingType, {
  foreignKey: "iShippingTypeId",
});

// Group, Category, and SubCategory
db.Group.hasMany(db.Category, {
  foreignKey: "iGroupId",
  onDelete: "CASCADE",
});
db.Category.belongsTo(db.Group, {
  foreignKey: "iGroupId",
});

db.Category.hasMany(db.SubCategory, {
  foreignKey: "iCategoryId",
  onDelete: "cascade",
});
db.SubCategory.belongsTo(db.Category, {
  foreignKey: "iCategoryId",
  onDelete: "cascade",
});

// Product and SubCategory
db.SubCategory.hasMany(db.Product, {
  foreignKey: "iSubCategoryId",
  onDelete: "cascade",
});
db.Product.belongsTo(db.SubCategory, {
  foreignKey: "iSubCategoryId",
  onDelete: "cascade",
});

// Product, Cart, and CartItem
db.Cart.hasMany(db.CartItem, {
  foreignKey: "iCartId",
  onDelete: "cascade",
});
db.Product.hasMany(db.CartItem, {
  foreignKey: "iProductId",
  onDelete: "cascade",
});
db.CartItem.belongsTo(db.Cart, {
  foreignKey: "iCartId",
  onDelete: "cascade",
});
db.CartItem.belongsTo(db.Product, {
  foreignKey: "iProductId",
  onDelete: "cascade",
});

// Product, User, and Review
db.Product.hasMany(db.Review, {
  foreignKey: "iProductId",
  onDelete: "cascade",
});
db.User.hasMany(db.Review, {
  foreignKey: "iUserId",
  onDelete: "cascade",
});
db.Review.belongsTo(db.Product, {
  foreignKey: "iProductId",
});
db.Review.belongsTo(db.User, {
  foreignKey: "iUserId",
});

// User and Address
db.User.hasMany(db.Address, {
  foreignKey: "iUserId",
  onDelete: "cascade",
});
db.Address.belongsTo(db.User, {
  foreignKey: "iUserId",
});

// User and Order
db.User.hasMany(db.Order, {
  foreignKey: "iUserId",
  onDelete: "cascade",
});
db.Order.belongsTo(db.User, {
  foreignKey: "iUserId",
});

// Order and OrderItem
db.Order.hasMany(db.OrderItem, {
  foreignKey: "iOrderId",
});
db.Product.hasMany(db.OrderItem, {
  foreignKey: "iProductId",
});
db.OrderItem.belongsTo(db.Order, {
  foreignKey: "iOrderId",
});
db.OrderItem.belongsTo(db.Product, {
  foreignKey: "iProductId",
});

// Order and Address (Shipping Address)
db.Order.belongsTo(db.Address, {
  foreignKey: "iShippingAddress",
  as: "shippingAddress", // Define alias for the association
});
db.Address.hasMany(db.Order, {
  foreignKey: "iShippingAddress",
  onDelete: "cascade",
});

// Order and Address (Billing Address)
db.Order.belongsTo(db.Address, {
  foreignKey: "iBillingAddress",
  as: "billingAddress", // Define alias for the association
});
db.Address.hasMany(db.Order, {
  foreignKey: "iBillingAddress",
  onDelete: "cascade",
});

// Order and ShippingType
db.ShippingType.hasMany(db.Order, {
  foreignKey: "iShippingTypeId",
  onDelete: "cascade",
});
db.Order.belongsTo(db.ShippingType, {
  foreignKey: "iShippingTypeId",
  onDelete: "cascade",
});

module.exports = db;
