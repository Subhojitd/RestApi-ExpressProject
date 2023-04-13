const ideaController = require("../controllers/idea.controller")
/**
 * Define route for calls
 *  
 * GET 127.0.0.1:8000/ideaApp/v1/ideas
 */
module.exports = (app)=>{
    // For the GET call
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas)
    // For the POST call
    app.post("/ideaApp/v1/ideas",ideaController.createIdeas)
    // For the PUT call
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea)
    // For the DELETE call
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea)
}