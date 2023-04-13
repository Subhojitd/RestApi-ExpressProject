// Import the ideas file
const ideas = require("../models/idea.model");

/**
 * Search all ideas
 */
exports.fetchAllIdeas = (req , res)=>{
    res.status(200).send(ideas);
}

let idCount = 1;
/**
 * Create new Ideas
 */
exports.createIdeas = (req, res)=>{
    // Read the request body
    const idea  = req.body;
    // Need to generate the idea id
    idea.id = ++idCount;
    // Save it in the list of existing ideas
    ideas[idCount] = idea;
    // Return the response
    res.status(201).send(ideas[idCount])
}

/**
 *Update Idea 
 */
exports.updateIdea = (req, res)=>{
    // I need to read the id passed in the path
    // 127.0.0.1:8000/ideaApp/v1/ideas/1
    const ideaId  =req.params.id;

    // If the idea is present then modify,  else--return error
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId])
    }else{
        res.status(400).send({
            message : "idea id passsed was not valid"
        })
    } 




}


 /**
  * Delete ideas
  */

 exports.deleteIdea = (req, res)=>{

    // Check if idea present---if yes delete else return error


    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message : "Succesfully Deleted"
        })
    }else{
        res.status(400).send({
            message : "Wrong ID Selection !"
        })
    }
 }