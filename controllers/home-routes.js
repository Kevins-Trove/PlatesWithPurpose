const router = require('express').Router();


// Landing page
router.get('/', async (req, res) => {
  
  res.render('homepage', { 
    
  });
});

router.get('/contact', async (req, res) => {
  // awaiting handlebar definition
  
  res.render('contact', { 
    
  });
});

router.get('/login', async (req, res) => {
  // awaing handlebar definition

  // res.render('handlebar definition', {

  // })
})

module.exports = router;
