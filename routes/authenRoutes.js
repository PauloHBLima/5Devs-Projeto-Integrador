const express = require('express');
const router = express.Router();
const authenController = require('../controllers/authenController');

router.get('/home/login', authenController.login);
router.post('/home/login', authenController.loginStore);
router.get('/home/register', authenController.register);
router.post('/home/register', authenController.registerStore);


module.exports = router;