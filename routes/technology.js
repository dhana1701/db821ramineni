var express = require("express");
const technology_controlers= require('../controllers/technology');
var router = express.Router();

/* GET home page. */
router.get('/', technology_controlers.technology_view_all_Page);

/* GET detail technology page */ 
router.get('/detail', technology_controlers.technology_view_one_Page);

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET create technology page */ 
router.get('/create', technology_controlers.technology_create_Page); 

/* GET create technology page */ 
router.get('/update',secured, technology_controlers.technology_update_Page);

/* GET create technology page */ 
router.get('/delete', technology_controlers.technology_delete_Page);


module.exports = router;