const express= require('express')
const router=express.Router()
const Register=require('../Controller/User/Register/register')
const Login = require('../Controller/User/Login/login')
const authenticateToken = require('../middlewares/verifytoken')
const Profile = require('../Controller/User/Profile/Profile')

router.get('/profile',authenticateToken,Profile)
router.post('/register',Register)
router.post('/login',Login)


module.exports =router