const router = require('express').Router();
const { User, Plate, Menu } = require('../../models');
const constants = require('../../utils/constants');



router.get('/give', async (req, res) => {

    
    let isAdmin = false;
    let isReceiver = true;


    if (req.session.logged_in){
        const user = await User.findByPk(req.session.user_id);

        const userData = user.get({plain: true})

        if (userData.type == constants.ADMIN){
            isAdmin = true;
          } else if (userData.type == constants.RECEIEVER) {
            isReceiver = false;
          }
    } else {
        res.render('login');
    }

    try {
        const dbOrderData = await Plate.findAll();

        const activeOrders = dbOrderData.map((item) =>
        item.get({plain: true}))

        res.render('give', {
            activeOrders, userData, logged_in: true, isAdmin, isGiver: !isReceiver
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }

    console.log(activeOrders);
})

module.exports = router;