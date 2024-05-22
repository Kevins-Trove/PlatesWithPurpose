//bulkCreate for requests, and log current users from a JSON object
const sequelize = require("../config/connection");
const {Plates, User, UserType} = require("../models");
const userRecord = require("../seeds/requests.orders.json");
const seedUsers = async () => {
    
}

seedUsers();
//json is test temporary data, that's not being used for part of the app process