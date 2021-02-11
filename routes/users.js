const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/UserModel');
router.get('/',async(req,res)=>{
    res.json(await User.find());
})
router.post('/login',async(req,res)=>{
    const {email,password}= req.body;
    
    const user = await User.findOne({email:email}).exec();
    
    bcrypt.compare(password,user.password,(err,isMatch)=>{
        if(err)res.send(null);
        if(isMatch){
            return res.json(user._id)
        }
        else{
            return res.json(null);
        }
    })
    
    
    

});
router.post('/register',async(req,res)=>{
    const {email} = req.body;
    const found = await User.findOne({email:email}).exec();
    
    if(found != null){
        res.send('found');
    }
    else{
        const newUser = new User(req.body);
        bcrypt.genSalt(10,(err,salt)=>bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)throw err;
            newUser.password = hash;

            newUser.save().then(user=>{
                console.log(user);
                res.send("succesvol geregistreerd");
            }).catch(err=>console.log(err));
        }))

    }
});

router.get('/user/:userId',async(req,res)=>{
    const {userId} = req.params;
    const user = await User.findById({_id:userId}).exec()
    console.log(user);
    res.send(user);
})
module.exports = router;