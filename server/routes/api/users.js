//router: to handle routing for the specific part. //auth
//we need to laod the express module
const bcrypt = require("bcryptjs");
const { response } = require("express");
const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const users = require("../../models/users");

const router = express.Router();
router.get('/', function (req, res) {
    res.json({message:"Hello from users"})
    }
);
// return: over the successful response: should return the jwt token (json web token)
// here iyt should hold the encrip
router.post("/register",
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").isEmail(),
     check("password", "pls include the valid password").isLength({ min: 6 }),
    async (req, res) => {

    //const user = {}
    try {

      console.log(req.headers);
      console.log(JSON.stringify(req.body))
      const { name, email, password } = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        console.log("inside the validation result");
        return res.status(400).json({ errors: errors.array() });
        }

        const user2 = await users.findOne({ email });
        if (user2) {
            return res.status(400).json({error:"user already exist"})
        }

        const salt = await bcrypt.genSalt(10);

        let user = new users({ name, email, password })
         user.password = await  bcrypt.hash(password, salt);
        await user.save();

        const payload = {
        user: {
          id: user.id,
        },
        };
      // payload : info which is required for the user to identify.
      // this payload info should be encrypted as shared as a token with time limit(token should have an expiry / validity.)
      jwt.sign(payload, "jwtSecret", { expiresIn: "5 days" }, (err, token) => {
        if (err) {
          throw err;
        }
        return res.status(201).json({
          token,
        });
      });
         //   console.log("Register post called successfully");
        // res.status(201).json({
        // message: "Register post called successfully" })
        } catch (err) {
        res.status(400).json(err.message)
        }
});
module.exports = router;