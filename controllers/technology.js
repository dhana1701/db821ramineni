var technology = require('../models/technology');
// List of all technology
exports.technology_list = async function(req, res) {
    try{
        thetechnology = await technology.find();
        res.send(thetechnology);
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`); 
    }
//res.send('NOT IMPLEMENTED: technology list');
};

// for a specific technology.
exports.technology_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await technology.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle technology create on POST.
exports.technology_create_post = async function (req, res) {
    console.log(req.body)
    let document = new technology();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require ttechnology it be a json object
    // {"technology_name":"beret technology", "colour":"white", "price":"Thirty-four USD"}
    document.type = req.body.type;
    document.estblishementdate = req.body.estblishementdate;
    document.Areas_of_technology = req.body.Areas_of_technology;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle technology delete on DELETE. 
exports.technology_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await technology.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
//Handle bakery update form on PUT.
exports.technology_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await technology.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.type)  toUpdate.type = req.body.type; 
        if(req.body.estblishementdate) toUpdate.estblishementdate = req.body.estblishementdate; 
        if(req.body.Areas_of_technology) toUpdate.Areas_of_technology = req.body.Areas_of_technology; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
// VIEWS
// Handle a show all view
exports.technology_view_all_Page = async function (req, res) {
    try {
        thetechnology = await technology.find();
        res.render('technology', { title: 'technology Search Results', results: thetechnology });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query 
exports.technology_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await technology.findById( req.query.id) 
        res.render('technologydetail',  
{ title: 'Technology Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a technology. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.technology_create_Page =  function(_req, res) { 
    console.log("create view") 
    try{ 
        res.render('technologycreate', { title: 'technology Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a technology. 
// query provides the id 
exports.technology_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await technology.findById(req.query.id)
        res.render('technologyupdate', { title: 'technology Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    } 
};

// Handle a delete one view with id from query 
exports.technology_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await technology.findById(req.query.id) 
        res.render('technologydelete', { title: 'technology Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};