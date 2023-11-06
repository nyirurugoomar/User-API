const router = require('express').Router();
const { getUsers, createUser , updateUser , deleteUser } = require('./controllers/User');




router.get('/users',getUsers)
router.post('/users',createUser)
router.put('/users/:userID',updateUser)
router.delete('/users/:productID',deleteUser)


module.exports = router;