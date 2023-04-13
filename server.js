const express = require("express");

const app = express();

// For understanding the json and convert it into javaScript
app.use(express.json());


// Starting Server
app.listen(8000,()=>{
    console.log("Yooo!! Server Started")
})



// Middle ware function
function myMiddleWare(req, res, next){
    console.log("Inside the middle ware i was created !!");
    next();//It will pass the control to the next step
}

// Using the middle ware
app.use(myMiddleWare)

/**
 * Import  the routes to the server
 */
require("./routes/idea.routes")(app);