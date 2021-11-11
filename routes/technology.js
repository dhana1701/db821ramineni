var express = require('express'); 
const technology_controlers= require('../controllers/technology'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', technology_controlers.technology_view_all_Page ); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('technology', { title: 'Search Results technology' });
});

module.exports = router;