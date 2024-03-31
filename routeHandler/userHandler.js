const express = require('express');
const mongoose = require('mongoose');
const router= express.Router()
const userSchema = require('../schema/userSchema');
const User= new mongoose.model("User", userSchema)

//Get All the user
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select({
      _id:0
    })
    .limit(1)
    .exec();
    res.status(200).json({
      result: users,
      message: "Users found successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "There was an error on the server side"
    });
  }
});


//Get a user by ID
router.get('/:id', async (req,res)=>{
  try {
    const users = await User.find({_id: req.params.id}).select({
      _id:0
    })
    .limit(1)
    .exec(); 
    res.status(200).json({
      result: users,
      message: "Users found successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "There was an error on the server side"
    });
  }

})

//POST a user
router.post('/', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(200).json({ message: "User was inserted successfully" });
    } catch (err) {
      res.status(500).json({ error: "There was an error" });
    }
  });

//Put user
router.put('/:id', async (req, res) => {
  try {
    await User.updateOne({ _id: req.params.id }, {
      $set: {
        first_name: req.body.first_name
      }
    });

    res.status(200).json({
      message: "User was updated"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "There was a server error"
    });
  }
});

//Delete a user
router.delete('/:id', async (req,res)=>{
  try {
    const users = await User.deleteOne({_id: req.params.id}).select({
      _id:0
    })
    .limit(1)
    .exec();
    res.status(200).json({
      result: users,
      message: "Users deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "There was an error on the server side"
    });
  }
})

module.exports= router
