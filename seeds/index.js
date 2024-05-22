//npm run seed (from package.json)
//throw everything into database for displaying 
const sequelize = require("../config/connection");
<<<<<<< HEAD
const {Menu, Restaurant, Plate, User} = require("../models");
const menuItemOne = require("./menuItem_List1.json");
//const menuItemTwo = require("./menuItem_List2.json");
const restaurantItem = require("./restaurants.json");
let userRecord = require("./user.requests.json");
=======
const {Menu} = require("../models");
const menuItemOne = require("./menuItem_List1.json");
//const menuItemTwo = require("./menuItem_List2.json");
//const restaurantItem = require("./restaurants.json");
>>>>>>> 5fc6db19e066ee0f4849a4e9beda482d69e21fe1

const seedMenus = async () => {
    await sequelize.sync({ force: true });
    //"returned {true}, but the message channel closed before a response was received"
<<<<<<< HEAD
    const chosen = await Restaurant.bulkCreate(restaurantItem, {
        individualHooks: true,
        returning: true,
    })
=======
    // const chosen = await Restaurants.bulkCreate(restaurantItem, {
    //     individualHooks: true,
    //     returning: true,
    // })
>>>>>>> 5fc6db19e066ee0f4849a4e9beda482d69e21fe1
    const viewers = await Menu.bulkCreate(menuItemOne, {
        individualHooks: true,
        returning: true,
    })
    // const viewer = await Menu.bulkCreate(menuItemTwo, { //where to call this?
    //     individualHooks: true,
    //     returning: true,
    // });
<<<<<<< HEAD
    //console.log(viewers, viewer, "menu seed");

    //user can have many plates
    const used = await User.bulkCreate(userRecord, {
        individualHooks: true,
        returning: true,
    });
    //console.log(used, "hello?");
    await Plate.create({ //relationship of Plate to User, UserType, others?
        ...userRecord,
        user_id: userRecord.id
    })
    
    await Restaurant.create({
        ...restaurantItem, ...menuItemOne ,
        //...restaurantItem and ...menuItemOne+...menuItemTwo displayed in SQL
        user_id: viewers.id
    })
    // await Restaurant.create({
=======
    // console.log(viewers, "menu seed");
    // await Restaurants.create({
    //     ...restaurantItem, ...menuItemOne ,
    //     //...restaurantItem and ...menuItemOne+...menuItemTwo displayed in SQL
    //     user_id: viewers.id
    // })
    // await Restaurants.create({
>>>>>>> 5fc6db19e066ee0f4849a4e9beda482d69e21fe1
    //     ...restaurantItem, ...menuItemTwo,
    //     //...restaurantItem and ...menuItemOne+...menuItemTwo displayed in SQL
    //     user_id: chosen.id
    // })
}
seedMenus()