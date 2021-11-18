var express = require("express");
const technology_controlers= require('../controllers/technology');
var router = express.Router();

/* GET home page. */
router.get('/', technology_controlers.technology_view_all_Page);

/* GET detail technology page */ 
router.get('/detail', technology_controlers.technology_view_one_Page);

/* GET create technology page */ 
router.get('/create', technology_controlers.technology_create_Page); 

/* GET create technology page */ 
router.get('/update', technology_controlers.technology_update_Page);

/* GET create technology page */ 
router.get('/delete', technology_controlers.technology_delete_Page);


module.exports = router;