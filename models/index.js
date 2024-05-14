// import models
const Plates = require("./Plates");
const Menu = require("./Menu");
const UserTypes = require("./UserType");
const Users = require("./User");


//const Restaurants = require("./Restaurants");

// Relations
UserTypes.belongsTo(Users, {
    foreignKey: "userType_id",
    onDelete: "CASCADE"
});

module.exports = {Plates, Menu, Users, UserTypes };