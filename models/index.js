// import models
const Restaurant = require("./Restaurants");
const Plate = require("./Plates");
const Menu = require("./Menu");
//const UserType = require("./UserType");
const User = require("./User");
const Contact = require("./contact");

//selects Restaurants then Menu (item)
Restaurant.hasOne(Menu, {foreignKey: "menu_id"});
Menu.belongsTo(Restaurant, {
    foreignKey: "restaurants_id"
});
User.hasMany(Plate, {
    foreignKey: "user_id"
});
Plate.belongsTo(Menu, {
    foreignKey: "user_id"
});

// Relations
// Categories have many Products
Plate.hasMany(Menu, {
    foreignKey: "menu_id"
});

Plate.hasMany(User, {
    foreignKey: "user_id"
});


module.exports = {Plate, Restaurant, Menu, User, Contact};