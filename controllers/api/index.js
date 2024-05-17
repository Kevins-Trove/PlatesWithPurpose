const router = require('express').Router();
const userRoutes = require('./user-routes');
const plateRoutes = require('./plate-routes');
const giveRoutes = require('./give');

router.use('/user', userRoutes);
router.use('/plate', plateRoutes);
router.use('/give', giveRoutes);

module.exports = router;