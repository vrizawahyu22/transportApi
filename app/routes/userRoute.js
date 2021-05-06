const express = require('express');

const userController = require('../controllers/userController');
const { createUser, siginUser }  = userController;

const router = express.Router();

// users Routes

router.post('/auth/signup', createUser);
router.post('/auth/signin', siginUser);
// router.get('/users/first_name', searchFirstnameOrLastname);

module.exports = router;
