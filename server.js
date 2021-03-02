const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models/UserModel');

//db start
require('./config/db')

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
app.use('/users',require('./routes/users'));



// /routes
app.get('/', (req, res) => {
  res.send("welcome op de homepage: Work in progress")

  
});
app.get('/user',(req,res)=>{
  const users = User.find();
  res.json(users);
})




app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${
      app.get('port')}; press Ctrl-C to terminate.`);
  });