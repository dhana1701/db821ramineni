var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var technology_controller = require('../controllers/technology'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// TECHNOLOGY ROUTES /// 
 
// POST request for creating a technology.  
router.post('/technology', technology_controller.technology_create_post); 
 
// DELETE request to delete technology. 
router.delete('/technology/:id', technology_controller.technology_delete); 
 
// PUT request to update technology. 
router.put('/technology/:id', technology_controller.technology_update_put); 
 
// GET request for one technology. 
router.get('/technology/:id', technology_controller.technology_detail); 
 
// GET request for list of all technology items. 
router.get('/technology', technology_controller.technology_list); 
 
module.exports = router; 