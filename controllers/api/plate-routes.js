const router = require('express').Router();
const { Plates, Menu } = require('../../models');
const Orders = require('../../models/orders');

router.get('/', async (req, res) => {
    res.render('order', {});
});

router.get('/give', async (req, res) => {
    try {
        const dbplatedata = await Orders.findAll();
        const orderedPlates = dbplatedata.map((item) => item.get({ plain: true }));
        res.render('give', { orderedPlates });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/order', async (req, res) => {
    try {
        const dbMenuData = await Menu.findAll();
        const menuItems = dbMenuData.map((item) => item.get({ plain: true }));
        res.render('order', { menuItems });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/order', async (req, res) => {
    try {
        const {address, city, state, zipcode} = req.body;
        const newOrder = await Plates.create({
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        })
        res.status(201).json({message: 'Order created successfully'})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to create order.'})
    }
})

module.exports = router;