const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/sequelize");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./userModel")(sequelize, DataTypes);
db.product = require("./productModel")(sequelize, DataTypes);
db.category = require("./categoryModel")(sequelize, DataTypes);
db.cart = require("./cartModel")(sequelize, DataTypes);
db.cartItem = require("./CartItem")(sequelize, DataTypes);

// db.user.hasOne(db.cart);

// db.category.hasMany(db.product);
// // db.product.belongsTo(db.category);

// db.cart.hasMany(db.cartItem);
// db.product.hasMany(db.cartItem);

// Associations
db.user.hasOne(db.cart);
db.cart.belongsTo(db.user);

db.category.hasMany(db.product);
db.product.belongsTo(db.category);

db.cart.hasMany(db.cartItem);
db.product.hasMany(db.cartItem);

db.cartItem.belongsTo(db.cart);
db.cartItem.belongsTo(db.product);

module.exports = db;
