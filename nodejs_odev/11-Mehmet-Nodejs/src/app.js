
 const express = require('express');
 const app = express();
 const monogoose = require('mongoose');
 require('dotenv').config();
 const bodyParser = require('body-parser');
 const router =require('./routers/auth');
 const PORT=process.env.PORT
 const mongoUrl = process.env.MongoURL;
 
 
 app.use(bodyParser.json());
 app.use('/users', router);
 

 
 monogoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(()=>{console.log('connected to mongoDB')}
 ).catch(err=>{console.log(err)});
 
 
 app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});