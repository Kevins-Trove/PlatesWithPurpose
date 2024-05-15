//bulkCreate for requests, and log current users from a JSON object
const sequelize = require("../config/connection");
const {Plates, User, UserType} = require("../models");
const userRecord = require("../seeds/requests.orders.json");
const seedUsers = async () => {
    await sequelize.sync({ force: true });
    const used = await User.bulkCreate(userRecord, {
        individualHooks: true,
        returning: true,
    });
    console.log(used, "hello?");
    await Plates.create({
        ...userRecord,
        user_id: userRecord.id
    })
}

seedUsers();
