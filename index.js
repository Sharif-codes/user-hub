const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userHandler = require('./routeHandler/userHandler');

const app= express()
app.use(cors())
app.use(express.json())

//database connection with mpngoose

mongoose.connect("mongodb+srv://sharifxenjia:NZt9GfSiKe94fCGx@jobtask.axlcn2k.mongodb.net/?retryWrites=true&w=majority&appName=jobTask")
.then( ()=> console.log("connection successfull")
)
.catch( (err)=> console.log(err))

app.use('/user', userHandler)

function errorHandler(err,req,res,next){
    if (res.headerSent) {
        return next(err)
    }
    res.status(500).json({error: err})
}

app.listen(3000,()=>{
    console.log("app listening at port 3000");
})