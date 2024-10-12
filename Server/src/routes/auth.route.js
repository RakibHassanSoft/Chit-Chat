const express = require('express');
const { register, login, logout, refreshToken } = require('../controllers/auth.controller');
const router = express.Router();
const trimRequest = require('trim-request');
// Correct the route path and method
// router.get('auth/register', (req, res) => {
//   res.send("Registration route is working!");
// });
router.post('/auth/register',trimRequest.all, register);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/refrenstToken', refreshToken);

// Use module.exports instead of export default
module.exports = router;
