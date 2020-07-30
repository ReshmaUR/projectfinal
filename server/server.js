const express = require('express');
const UserData = require('./model/Userdata');
const JobData = require('./model/Jobdata');
const jwt = require('jsonwebtoken');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
const port = 3000;
app.use(cors());
app.use(bodyparser.json());

// for register
app.post("/register",(req,res)=>{
    let userData = req.body;
    let user = new UserData (userData);
    user.save((err,registerdUser)=>{
        if(err){
            console.log(err);
        }
        else{
            let payload = {subject: user._id};
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
        }
    });
});

// for login
app.post("/login",(req,res)=>{
    let userData = req.body;
    UserData.findOne({email:userData.email},(err,user)=>{
        
            if(err){
                console.log(err);
            }
            else{
                if(!user){
                    res.status(401).send("Invalid email");
                }
                else {
                    if(user.password !== userData.password){
                    res.status(401).send("Invalid password");
                    }
                    else{
                        let payload = {subject: user._id};
                        let token = jwt.sign(payload,'secretKey');
                        res.status(200).send({token});
                    }
                }
            }
        
    })
})

// job list
app.get('/jobs',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    JobData.find()
    .then(function(jobs){
        res.send(jobs);
    })
});
// admin jobs
app.get('/ajobs',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    JobData.find()
    .then(function(jobs){
        res.send(jobs);
    })
});

// new job
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var job = {
        name : req.body.job.name,
        role : req.body.job.role,
        vacancy : req.body.job.vacancy,
        location : req.body.job.location,
        organisation : req.body.job.organisation,
        updation : req.body.job.updation,
        lastdate : req.body.job.lastdate,
        description : req.body.job.description,
        link : req.body.job.link
    }
    var job = new JobData(job);
    job.save();
    res.send("new job added");
})

// for delete
app.post("/delete",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
     id = req.body.id;
    JobData.findByIdAndDelete({_id:id})
    .then(function(){
    console.log("Deleted successfully");
    JobData.find()
    .then(function(jobs){
        res.send(jobs);
        res.send("Deleted");
    })
    
    })
})

// for update
app.post("/update",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(id);
    id = req.body.ID.id;
    JobData.findByIdAndUpdate({_id:id},{
        name : req.body.job.name,
        role : req.body.job.role,
        vacancy : req.body.job.vacancy,
        location : req.body.job.location,
        organisation : req.body.job.organisation,
        updation : req.body.job.updation,
        lastdate : req.body.job.lastdate,
        description : req.body.job.description,
        link : req.body.job.link},(err,doc)=>{if(err)console.log(err)}
    )
})

app.post('/updated',(req,res)=>{

    console.log("Updated list")
    id=req.body.ID.id;
    console.log(id);
    JobData.findById({_id:id}).then((job)=>{res.send(job)});

})

app.get('/',(req,res)=>{
    res.send("Hello..from server");
});
app.listen(port,()=>{
    console.log("Server running on localhost:" + port);
});