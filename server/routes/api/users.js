//router: to handle routing for the specific part. //auth
//we need to laod the express module
const express = require('express');
const users = require('../../models/users');
const router = express.Router();
router.get('/', function (req, res) {
    res.json({message:"Hello from users"})
    }
);

router.post("/register", async (req, res) => {

    //const user = {}
    try {

            console.log(req.headers);
            console.log(JSON.stringify(req.body))
            const { name, email, password } = req.body;
            let user = new users({name, email, password })
            await user.save();
         //   console.log("Register post called successfully");
             res.status(201).json({
        message: "Register post called successfully" })
        } catch (err) {
        res.status(400).json(err.message)
        }
});
module.exports = router;