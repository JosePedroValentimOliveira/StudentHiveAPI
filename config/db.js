const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MongoURI;


mongoose.connect(db,{useNewUrlParser : true,useUnifiedTopology:true,useFindAndModify: false })
.then(()=>console.log('mongoDB Connected'))
.catch((err)=>console.log(err));