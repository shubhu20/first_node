const User=require('./models/user');
// const {auth} =require('./middlewares/auth');
const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const db=require('./config/config').get(process.env.NODE_ENV);



const app=express();
// app use
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());


// database connection
mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


app.get('/',function(req,res){
    res.status(200).send(`Welcome to user`);
});



// adding new user 
app.post('/api/user',function(req,res){
    // taking a user
    const newuser=new User(req.body);

    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});

         newuser.save((err,doc)=>{
            if(err) {console.log(err);
              return res.status(400).json({ success : false});}
            res.status(200).json({
              succes:true,
              user : doc
        });
    
    
 });
});
});

// get user
app.get('/api/getuser', function(req,res){
User.find({}).then((User)=>{
  res.status(200).json(User);
})
});


// listening port
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});