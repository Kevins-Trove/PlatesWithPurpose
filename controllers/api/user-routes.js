const router = require('express').Router();
const { User } = require('../../models');
const constants = require('../../utils/constants');

router.post('/', async (req, res) => {
  try {

    const userData = await User.create(req.body);
  
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/profile', async (req, res) => {
  
  if (req.session.logged_in) {
    const user = await User.findByPk(req.session.user_id );

    const userData = user.get({ plain: true })
    
    let isAdmin = false;
    let isReceiver = false;

    if (userData.type == constants.ADMIN){
      isAdmin = true;
    } else if (userData.type == constants.RECEIVER) {
      isReceiver = true;
    }


    res.render('profileView',{
      userData, logged_in: true, isAdmin, isReceiver, isGiver: !isReceiver
  });
  } else {
    res.render('profileCreate');
  }

});

/// Route for updating an existing user
router.put('/profile/:id', async (req, res) => {
  const { id } = req.params; // get id from url param
  try {
    const userData = req.body; // this is the new field data sent from the profileView
    const [updated] = await User.update(userData, {
      where: { id } 
    });

  if (updated > 0) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user due to an error', error: error.toString() }); // give me an error json
  }
});


router.get('/login', async (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/logout', (req, res) => {
  console.log(1);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
  console.log(3);
});

module.exports = router;
