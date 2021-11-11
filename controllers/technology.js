var technology = require('../models/technology'); 
 
// List of all technology

exports.technology_list = async function(req, res) { 
    try{ 
        thetechnology = await technology.find(); 
        res.send(thetechnology); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// for a specific technology. 
exports.technology_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: technology detail: ' + req.params.id); 
}; 
 
// Handle technology create on POST. 
// Handle technology create on POST. 
exports.technology_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new technology(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"motel_type":"goat", "cost":12, "size":"large"} 
    document.type = req.body.type; 
    document.estblishementdate = req.body.estblishementdate; 
    document.Areas_of_technology = req.body.Areas_of_technology; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.technology_view_all_Page = async function(req, res) { 
    try{ 
        thetechnology = await technology.find(); 
        res.render('technology', { title: 'technology Search Results', results: thetechnology }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle technology delete form on DELETE. 
exports.technology_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: technology delete DELETE ' + req.params.id); 
}; 
 
// Handle motel update form on PUT. 
exports.technology_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: technology update PUT' + req.params.id); 
};