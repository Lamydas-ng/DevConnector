//router: to handle routing for the specific part. //auth
//we need to laod the express module

const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
router.get('/', auth, function (req, res) {

res.json({message:"Hello from auth",})
});
module.exports = router;