const express = require('express');
const app = express();


const logger=(req,res,next)=>{
    let url = req.headers.host + req.originalUrl;
    console.log(url);
    next();
}
app.use(logger)



const permission=(request,result,next)=>{
    var rname = request.route.path  
    
        var obj={
            route:rname,
            permission:true
        }
        request.data = obj;
        next()    
}

app.get('/books', (request,response,next) => {
    console.log("Hello");
   response.json({ route: "/books"})
    
}
)
app.get("/libraries",permission, (request,response,next) => {
        // console.log("Hello");
        response.send(request.data);
        next();
    }
)
app.get("/authors",permission, (request,response,next) => {
    // console.log("Hello");
  response.send(request.data);
  
}
)

module.exports = app;