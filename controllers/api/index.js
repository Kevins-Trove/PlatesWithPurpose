const router = require('express').Router();
const userRoutes = require('./user-routes');
const plateRoutes = require('./plate-routes');

router.use('/users', userRoutes);
router.use('/plate', plateRoutes);

module.exports = router;