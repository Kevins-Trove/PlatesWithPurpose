const router = require('express').Router();
const { Contact } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const contactData = await Contact.create(req.body);
      res.status(200).json(contactData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;