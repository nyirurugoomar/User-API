const User = require("../model/User.js");


//get
const getUsers = (req, res) => {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
     
    });
};

//post
const createUser = async (req, res) => {
    const { firstName, lastName, age, location } = req.body;

    try {
        const user = new User({
            firstName,
            lastName,
            age,
            location,
        });

        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//update

const updateUser = (req,res)=>{
    User.findOneAndUpdate(
        {_id: req.params.userID},
        {
          $set:{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            location: req.body.location,
          },   
        },
        {new : true}
    )
    .then((updateUser)=>{
        if(!updateUser){
            return res.status(404).json({error:"User not found"})
        }
        res.json(updateUser);
    })
    .catch((error)=>{
        res.status(500).json({error: error.message })
    });

};


//delete
const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.productID })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "Product Deleted" });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
