const router = require('express').Router();
const { Plates, Menu } = require('../../models');
const requestOrders = require("../../seeds/requests.orders.json");

router.get('/', async (req, res) => {
    
    res.render('order', { 
    
    });
})

router.get('/give', async (req, res) => {
    
    res.render('give', { 
    
    });
})

router.get('/order', async (req, res) => {
    
    try {
        const dbMenuData = await Menu.findAll();//found menuItem_List1.json
    
        
        const menuItems = dbMenuData.map((item) =>
            item.get({ plain: true })
        );

        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('order', {
            menuItems //in order.handlebars
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})

router.post('/order', async (req, res) => {
    
    try {
        const newPlate = await Plate.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newProject);
      } catch (err) {
        res.status(400).json(err);
      }

})

module.exports = router;


module.exports = router;
