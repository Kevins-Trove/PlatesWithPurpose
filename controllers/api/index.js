const router = require('express').Router();

const userRoutes = require('./user-routes');
const plateRoutes = require('./plate-routes');
const contactRoutes = require("./contact-routes");

router.use('/user', userRoutes);
router.use('/plate', plateRoutes);
router.use("/contact", contactRoutes);

module.exports = router;