const router = require('express').Router();

const userRoutes = require('./user-routes');
const plateRoutes = require('./plate-routes');
const contactRoutes = require("./contact-routes");
const emailRoutes = require("./email-routes");

router.use('/user', userRoutes);
router.use('/plate', plateRoutes);
router.use("/contact", contactRoutes);
router.use("/email", emailRoutes);
module.exports = router;